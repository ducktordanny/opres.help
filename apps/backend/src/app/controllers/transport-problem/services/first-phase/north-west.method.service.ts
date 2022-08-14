import {Injectable, NotAcceptableException} from '@nestjs/common';

import {
  CalculationMode,
  FirstPhaseStep,
  TPData,
  TransportTable,
} from '@opres/shared/types';
import {cloneDeep} from 'lodash';

import {createResultTableFrom} from '../../utils/result-table.util';
import {transport} from '../../utils/transport.util';

@Injectable()
export class NorthWestMethodService {
  public calculate(
    transportProblemData: TPData,
    mode: CalculationMode,
  ): Array<FirstPhaseStep> {
    const {costs, shopDemands, storageStocks} = cloneDeep(transportProblemData);

    const process: Array<FirstPhaseStep> = [];
    const resultTable: TransportTable = createResultTableFrom(costs);
    let stockIndex = 0,
      demandIndex = 0;

    let iterationCounter = 0;
    while (
      stockIndex < storageStocks.length &&
      demandIndex < shopDemands.length
    ) {
      const [currentDemand, currentStock] = transport(
        resultTable,
        shopDemands,
        storageStocks,
        demandIndex,
        stockIndex,
      );

      if (currentDemand < currentStock) demandIndex++;
      else stockIndex++;

      process.push({
        transportation: cloneDeep(resultTable) as TransportTable,
        demands: [...shopDemands],
        stocks: [...storageStocks],
      });

      iterationCounter++;
      if (iterationCounter > 30)
        throw new NotAcceptableException(
          'Too many iterations during calculation. No result.',
        );
    }

    return process;
  }
}
