import {ProblemTable} from '@opres/shared/types';

export const tspRequestMock1: ProblemTable = [
  {'0': null, '1': 0, '2': 4, '3': 1, '4': 7},
  {'0': 0, '1': null, '2': 6, '3': 7, '4': 0},
  {'0': 4, '1': 6, '2': null, '3': 0, '4': 0},
  {'0': 2, '1': 5, '2': 0, '3': null, '4': 6},
  {'0': 7, '1': 0, '2': 0, '3': 4, '4': null},
];

export const tspRequestMock2: ProblemTable = [
  {'0': null, '1': 0, '2': 2, '3': 4, '4': 7},
  {'0': 0, '1': null, '2': 1, '3': 0, '4': 3},
  {'0': 2, '1': 1, '2': null, '3': 0, '4': 3},
  {'0': 5, '1': 2, '2': 0, '3': null, '4': 0},
  {'0': 3, '1': 6, '2': 3, '3': 0, '4': null},
];
