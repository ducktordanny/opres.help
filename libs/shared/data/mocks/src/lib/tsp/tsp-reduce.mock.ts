import {ProblemTable} from '@opres/shared/types';

export const tspReduceRequestMock1: ProblemTable = [
  {'0': null, '1': 1, '2': 5, '3': 2, '4': 8},
  {'0': 3, '1': null, '2': 8, '3': 9, '4': 2},
  {'0': 7, '1': 8, '2': null, '3': 2, '4': 2},
  {'0': 4, '1': 6, '2': 1, '3': null, '4': 7},
  {'0': 9, '1': 1, '2': 1, '3': 5, '4': null},
];

export const tspReduceResponseMock1: ProblemTable = [
  {'0': null, '1': 0, '2': 4, '3': 1, '4': 7},
  {'0': 0, '1': null, '2': 6, '3': 7, '4': 0},
  {'0': 4, '1': 6, '2': null, '3': 0, '4': 0},
  {'0': 2, '1': 5, '2': 0, '3': null, '4': 6},
  {'0': 7, '1': 0, '2': 0, '3': 4, '4': null},
];

export const tspReduceRequestMock2: ProblemTable = [
  {'0': null, '1': 2, '2': 4, '3': 6, '4': 9},
  {'0': 3, '1': null, '2': 2, '3': 1, '4': 4},
  {'0': 6, '1': 3, '2': null, '3': 2, '4': 5},
  {'0': 8, '1': 3, '2': 1, '3': null, '4': 1},
  {'0': 6, '1': 7, '2': 4, '3': 1, '4': null},
];

export const tspReduceResponseMock2: ProblemTable = [
  {'0': null, '1': 0, '2': 2, '3': 4, '4': 7},
  {'0': 0, '1': null, '2': 1, '3': 0, '4': 3},
  {'0': 2, '1': 1, '2': null, '3': 0, '4': 3},
  {'0': 5, '1': 2, '2': 0, '3': null, '4': 0},
  {'0': 3, '1': 6, '2': 3, '3': 0, '4': null},
];
