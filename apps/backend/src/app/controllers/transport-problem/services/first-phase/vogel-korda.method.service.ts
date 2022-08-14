import {Injectable, NotAcceptableException} from '@nestjs/common';

import {
  AuxiliaryVariables,
  CalculationMode,
  Cell,
  Demands,
  FirstPhaseStep,
  Stocks,
  TPData,
  TransportTable,
} from '@opres/shared/types';
import {cloneDeep, max, min} from 'lodash';

import {createResultTableFrom} from '../../utils/result-table.util';
import {canTransport, transport} from '../../utils/transport.util';

interface Indexes {
  demandIndex: number;
  stockIndex: number;
}

@Injectable()
export class VogelKordaMethodService {
  public calculate(
    transportProblemData: TPData,
    mode: CalculationMode,
  ): Array<FirstPhaseStep> {
    const {costs, shopDemands, storageStocks} = cloneDeep(transportProblemData);

    const process: Array<FirstPhaseStep> = [];
    const resultTable: TransportTable = createResultTableFrom(costs);

    let iterationCounter = 0;
    while (canTransport(shopDemands, storageStocks)) {
      const auxiliaryVariables = this.getAuxiliaryVariables(
        resultTable,
        shopDemands,
        storageStocks,
      );
      const {demandIndex, stockIndex} = this.getIndexes(
        auxiliaryVariables,
        resultTable,
        shopDemands,
        storageStocks,
      );
      transport(
        resultTable,
        shopDemands,
        storageStocks,
        demandIndex,
        stockIndex,
      );

      process.push({
        transportation: cloneDeep(resultTable) as TransportTable,
        demands: [...shopDemands],
        stocks: [...storageStocks],
        auxiliaryVariables,
      });

      iterationCounter++;
      if (iterationCounter > 30)
        throw new NotAcceptableException(
          'Too many iterations during calculation. No result.',
        );
    }

    return process;
  }

  private getIndexes(
    auxiliaryVariables: AuxiliaryVariables,
    resultTable: TransportTable,
    actualDemands: Demands,
    actualStocks: Stocks,
  ): Indexes {
    const xAxisMax = max(auxiliaryVariables.x);
    const yAxisMax = max(auxiliaryVariables.y);

    if (yAxisMax > xAxisMax) {
      const stockIndex = auxiliaryVariables.y.indexOf(yAxisMax);
      const availableCosts = Object.values(resultTable[stockIndex]).map(
        (cell, index) => (actualDemands[index] ? cell.cost : null),
      );
      const minCost = min(availableCosts);

      return {
        demandIndex: availableCosts.indexOf(minCost),
        stockIndex,
      };
    }

    const demandIndex = auxiliaryVariables.x.indexOf(xAxisMax);
    const availableCosts = resultTable.map((rows, index) =>
      actualStocks[index] ? rows[demandIndex].cost : null,
    );
    const minCost = min(availableCosts);

    return {
      demandIndex,
      stockIndex: availableCosts.indexOf(minCost),
    };
  }

  private getAuxiliaryVariables(
    resultTable: TransportTable,
    actualDemands: Demands,
    actualStocks: Stocks,
  ): AuxiliaryVariables {
    return {
      x: this.getXAxisVariables(resultTable, actualDemands, actualStocks),
      y: this.getYAxisVariables(resultTable, actualDemands, actualStocks),
    } as AuxiliaryVariables;
  }

  private getYAxisVariables(
    resultTable: TransportTable,
    actualDemands: Demands,
    actualStocks: Stocks,
  ): Array<number> {
    const yAxisVariables: Array<number | null> = [];
    for (const [index, row] of resultTable.entries()) {
      if (!actualStocks[index]) {
        yAxisVariables.push(null);
        continue;
      }
      const sortedAvailableCosts = Object.values(row)
        .filter((cell, index) => !!actualDemands[index])
        .sort((cellA, cellB) => cellA.cost - cellB.cost);

      this.pushVariableFromAvailableCosts(yAxisVariables, sortedAvailableCosts);
    }
    return yAxisVariables;
  }

  private getXAxisVariables(
    resultTable: TransportTable,
    actualDemands: Demands,
    actualStocks: Stocks,
  ): Array<number> {
    const xAxisVariables: Array<number | null> = [];
    let columnIndex = 0;
    while (columnIndex < actualDemands.length) {
      if (!actualDemands[columnIndex]) {
        xAxisVariables.push(null);
        columnIndex++;
        continue;
      }
      const sortedAvailableCosts = resultTable
        .map((row) => row[columnIndex])
        .filter((cell, index) => !!actualStocks[index])
        .sort((cellA, cellB) => cellA.cost - cellB.cost);

      this.pushVariableFromAvailableCosts(xAxisVariables, sortedAvailableCosts);
      columnIndex++;
    }
    return xAxisVariables;
  }

  private pushVariableFromAvailableCosts(
    axisVariables: Array<number>,
    filteredRow: Array<Cell>,
  ): void {
    if (filteredRow.length > 1) {
      const auxiliaryVar = filteredRow[1].cost - filteredRow[0].cost;
      axisVariables.push(auxiliaryVar);
    } else if (filteredRow.length === 1)
      axisVariables.push(filteredRow[0].cost);
  }
}
