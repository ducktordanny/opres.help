import {Injectable} from '@nestjs/common';

import {
  AuxiliaryVariables,
  CalculationMode,
  NextBase,
  SecondPhaseStep,
  TransportTable,
} from '@opres/shared/types';
import {findIndex, map, some} from 'lodash';

@Injectable()
export class SecondPhaseService {
  public calculate(
    transportTable: TransportTable,
    mode: CalculationMode,
  ): Array<SecondPhaseStep> {
    const variables = this.getAuxiliaryVariable(transportTable);
    const nextNewBase = this.getNextNewBase(transportTable, variables);
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
      for (const [rowIndex, row] of transportTable.entries()) {
        const cells = Object.values(row);
        for (const [columnIndex, cell] of cells.entries()) {
          const currentXVariable = variables.x[columnIndex];
          const currentYVariable = variables.y[rowIndex];

          if (cell.transported === undefined) continue;
          if (currentXVariable === null && currentYVariable === null) continue;
          if (currentXVariable !== null && currentYVariable !== null) continue;

          if (currentYVariable === null)
            variables.y[rowIndex] = cell.cost - variables.x[columnIndex];
          else if (currentXVariable === null)
            variables.x[columnIndex] = cell.cost - variables.y[rowIndex];
        }
      }
    }
    return variables;
  }

  private getNextNewBase(
    transportTable: TransportTable,
    variables: AuxiliaryVariables,
  ): NextBase {
    let newBase: NextBase = {potential: 0, x: 0, y: 0};
    for (const [rowIndex, row] of transportTable.entries()) {
      const cells = Object.values(row);
      for (const [columnIndex, cell] of cells.entries()) {
        if (cell.transported !== undefined) continue;
        const potential =
          cell.cost - (variables.x[columnIndex] + variables.y[rowIndex]);
        transportTable[rowIndex][columnIndex].potential = potential;
        if (newBase.potential === null || newBase.potential > potential)
          newBase = {potential, x: columnIndex, y: rowIndex};
      }
    }
    return newBase;
  }
}
