import {Injectable} from '@nestjs/common';

import {
  AuxiliaryVariables,
  CalculationMode,
  SecondPhaseStep,
  SelectedCell,
  TransportTable,
} from '@opres/shared/types';
import {findIndex, forEach, map, some} from 'lodash';

import {getBaseCellsInColumn} from '../utils/base-cells-counter.util';

@Injectable()
export class SecondPhaseService {
  public calculate(
    transportTable: TransportTable,
    mode: CalculationMode,
  ): Array<SecondPhaseStep> {
    console.log(getBaseCellsInColumn(transportTable, 1));
    // todo this should be iterated after the circle is implemented
    let nextBase: SelectedCell = {x: 0, y: 0};
    while (nextBase?.value === undefined || nextBase?.value < 0) {
      const variables = this.getAuxiliaryVariable(transportTable);
      nextBase = this.getNextNewBase(transportTable, variables);
      console.log(variables);
      console.log(transportTable);
      console.log(nextBase);
      const circle = this.getCircle(transportTable, nextBase);
      console.log('circle', circle);
      break; // ! until we have no circle implementation
    }

    return [];
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
    let newBase: SelectedCell = {value: 0, x: 0, y: 0};
    forEach(transportTable, (row, rowIndex) =>
      forEach(row, (cell, columnIndex) => {
        if (cell.transported !== undefined) return;
        const potential =
          cell.cost - (variables.x[columnIndex] + variables.y[rowIndex]);
        transportTable[rowIndex][columnIndex].potential = potential;
        if (newBase.value === null || newBase.value > potential)
          newBase = {value: potential, x: +columnIndex, y: rowIndex};
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
    return baseCells;
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
