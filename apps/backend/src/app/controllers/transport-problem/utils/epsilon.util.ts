import {Epsilon, TransportTable} from '@opres/shared/types';

import {epsilonLanguage} from '../../../language/epsilon.language';

export function getEpsilon(
  transportTable: TransportTable,
  explanation: boolean,
): Epsilon {
  let epsilon = 0;
  let calculation = '';

  for (const [rowIndex, row] of transportTable.entries())
    for (const [columnIndex] of Object.entries(row)) {
      const cost = transportTable[rowIndex][columnIndex].cost || 0;
      const transportation =
        transportTable[rowIndex][columnIndex].transported || 0;

      if (cost !== 0 && transportation !== 0) {
        if (calculation !== '') calculation += ' + ';
        calculation += `${transportation}*${cost}`;
      }
      epsilon += transportation * cost;
    }

  if (!explanation) return {value: epsilon};

  calculation += ` = ${epsilon}`;
  return {
    value: epsilon,
    explanation: epsilonLanguage(calculation),
  };
}
