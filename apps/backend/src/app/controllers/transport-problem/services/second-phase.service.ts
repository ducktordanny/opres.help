import {Injectable} from '@nestjs/common';

import {
  AuxiliaryVariables,
  CalculationMode,
  SecondPhaseStep,
  SelectedCell,
  TransportTable,
} from '@opres/shared/types';
import {
  cloneDeep,
  findIndex,
  first,
  forEach,
  last,
  map,
  minBy,
  some,
} from 'lodash';

@Injectable()
export class SecondPhaseService {
  public calculate(
    transportTable: TransportTable,
    mode: CalculationMode,
  ): Array<SecondPhaseStep> {
    const process: Array<SecondPhaseStep> = [];
    let nextBase: SelectedCell = {x: 0, y: 0};
    do {
      const variables = this.getAuxiliaryVariable(transportTable);
      nextBase = this.getNextNewBase(transportTable, variables);
      if (nextBase?.value !== undefined) {
        const circle = this.getCircle(transportTable, nextBase);
        process.push({
          transportation: cloneDeep(transportTable),
          auxiliaryVariables: variables,
          nextBase: cloneDeep(nextBase),
          circle,
        });
        this.reduceTransportTable(transportTable, cloneDeep(circle));
        continue;
      }
      process.push({transportation: cloneDeep(transportTable)});
    } while (nextBase?.value !== undefined);
    return process;
  }

  private getAuxiliaryVariable(
    transportTable: TransportTable,
  ): AuxiliaryVariables {
    const variables: AuxiliaryVariables = {
      x: map(transportTable[0], () => null),
      y: map(transportTable, () => null),
    };
    const initialRow = findIndex(transportTable, (row) =>
      some(row, (cell) => !!cell.transported),
    );
    variables.y[initialRow] = 0;

    const containsNull = (variable) => variable === null;
    while (variables.x.some(containsNull) || variables.y.some(containsNull)) {
      forEach(transportTable, (row, rowIndex) =>
        forEach(row, (cell, columnIndex) => {
          const currentXVariable = variables.x[columnIndex];
          const currentYVariable = variables.y[rowIndex];

          if (cell.transported === undefined) return;
          if (currentXVariable === null && currentYVariable === null) return;
          if (currentXVariable !== null && currentYVariable !== null) return;

          if (currentYVariable === null)
            variables.y[rowIndex] = cell.cost - variables.x[columnIndex];
          else if (currentXVariable === null)
            variables.x[columnIndex] = cell.cost - variables.y[rowIndex];
        }),
      );
    }
    return variables;
  }

  private getNextNewBase(
    transportTable: TransportTable,
    variables: AuxiliaryVariables,
  ): SelectedCell {
    let newBase: SelectedCell = {value: undefined, x: 0, y: 0};
    forEach(transportTable, (row, rowIndex) =>
      forEach(row, (cell, columnIndex) => {
        if (cell.transported !== undefined)
          return (cell.reducedCost = undefined);
        const reducedCost =
          cell.cost - (variables.x[columnIndex] + variables.y[rowIndex]);
        transportTable[rowIndex][columnIndex].reducedCost = reducedCost;
        if (
          (newBase?.value === undefined && reducedCost < 0) ||
          newBase?.value > reducedCost
        )
          newBase = {value: reducedCost, x: +columnIndex, y: rowIndex};
      }),
    );
    return newBase;
  }

  private getCircle(
    transportTable: TransportTable,
    nextBase: SelectedCell,
  ): Array<SelectedCell> {
    let baseCells: Array<SelectedCell> = this.getBaseCellPositions(
      transportTable,
      nextBase,
    );
    let removedCells = Infinity;
    while (removedCells > 0) {
      const filteredBaseCells = baseCells.filter((value, _, array) => {
        const xIndexes = array.filter((v) => v.x === value.x).length;
        const yIndexes = array.filter((v) => v.y === value.y).length;
        return xIndexes > 1 && yIndexes > 1;
      });
      removedCells = baseCells.length - filteredBaseCells.length;
      baseCells = filteredBaseCells;
    }
    return this.sortCircleCells(baseCells);
  }

  private getMaxReducableValueFromCircle(circle: Array<SelectedCell>): number {
    return minBy(
      circle?.filter((cell, index) => cell?.value !== -1 && index % 2 !== 0),
      'value',
    )?.value;
  }

  private sortCircleCells(circle: Array<SelectedCell>): Array<SelectedCell> {
    const comparingIndex = (isX: boolean) => (isX ? 'x' : 'y');
    let isX = true;
    const sortedCircle = [circle[0]];
    for (let i = 1; i < circle.length; i++) {
      const lastSortedCell = last(sortedCircle);
      const baseCell = circle?.find(
        (value) =>
          value?.[comparingIndex(isX)] ===
            lastSortedCell?.[comparingIndex(isX)] &&
          value?.[comparingIndex(!isX)] !==
            lastSortedCell?.[comparingIndex(!isX)],
      );
      sortedCircle.push(baseCell);
      isX = !isX;
    }
    return sortedCircle;
  }

  private reduceTransportTable(
    transportTable: TransportTable,
    circle: Array<SelectedCell>,
  ): void {
    const maxReducableValue = this.getMaxReducableValueFromCircle(circle);
    first(circle).value = maxReducableValue;
    for (let i = 1; i < circle.length; i++) {
      if (!circle[i]) continue;
      if (i % 2) circle[i].value -= maxReducableValue;
      else circle[i].value += maxReducableValue;
    }
    forEach(circle, (cell) => {
      transportTable[cell?.y][cell?.x].transported =
        cell?.value === 0 ? undefined : cell?.value;
    });
  }

  private getBaseCellPositions(
    transportTable: TransportTable,
    nextBase?: SelectedCell,
  ): Array<SelectedCell> {
    const baseCellPositions: Array<SelectedCell> = [];
    if (nextBase) baseCellPositions.push({...nextBase, value: -1});

    forEach(transportTable, (row, rowIndex) =>
      forEach(row, (cell, columnIndex) => {
        if (cell.transported !== undefined)
          baseCellPositions.push({
            x: +columnIndex,
            y: rowIndex,
            value: cell.transported,
          });
      }),
    );

    return baseCellPositions;
  }
}
