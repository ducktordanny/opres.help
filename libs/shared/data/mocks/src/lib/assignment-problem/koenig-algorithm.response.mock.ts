import {KoenigAlgoResponse} from '@opres/shared/types';

export const koenigAlgorithmGreedyResponseMock1: KoenigAlgoResponse = [
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 5},
    ],
    reachedRows: [2, 3, 4],
    targetColumns: [3, 4, 5],
    verifiedLines: {rows: [], columns: []},
    columnToRowMarks: {},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 5},
    ],
    reachedRows: [0],
    targetColumns: [3, 4, 5],
    verifiedLines: {rows: [2, 3, 4], columns: [0]},
    columnToRowMarks: {'0': 2},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 5},
    ],
    strikeThroughs: {rows: [1, 5], columns: [0]},
  },
];

export const koenigAlgorithmGreedyResponseMock2: KoenigAlgoResponse = [
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 4, y: 2},
      {x: 2, y: 3},
      {x: 5, y: 4},
    ],
    reachedRows: [5],
    targetColumns: [3],
    verifiedLines: {rows: [], columns: []},
    columnToRowMarks: {},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 4, y: 2},
      {x: 2, y: 3},
      {x: 5, y: 4},
    ],
    reachedRows: [4],
    targetColumns: [3],
    verifiedLines: {rows: [5], columns: [5]},
    columnToRowMarks: {'5': 5},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 4, y: 2},
      {x: 2, y: 3},
      {x: 5, y: 4},
    ],
    reachedRows: [2],
    targetColumns: [3],
    verifiedLines: {rows: [5, 4], columns: [5, 4]},
    columnToRowMarks: {'4': 4, '5': 5},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 4, y: 2},
      {x: 2, y: 3},
      {x: 5, y: 4},
    ],
    strikeThroughs: {rows: [0, 1, 3], columns: [4, 5]},
  },
];

export const koenigAlgorithmGreedyResponseMock3: KoenigAlgoResponse = [
  {
    selectedIndependentZeros: [
      {x: 1, y: 0},
      {x: 0, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 4},
    ],
    reachedRows: [3, 5],
    targetColumns: [4, 5],
    verifiedLines: {rows: [], columns: []},
    columnToRowMarks: {},
  },
  {
    selectedIndependentZeros: [
      {x: 1, y: 0},
      {x: 0, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 4},
    ],
    reachedRows: [0, 2],
    targetColumns: [4, 5],
    verifiedLines: {rows: [3, 5], columns: [1, 2]},
    columnToRowMarks: {'1': 3, '2': 3},
  },
  {
    selectedIndependentZeros: [
      {x: 4, y: 0},
      {x: 0, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 4},
      {x: 1, y: 3},
    ],
    reachedRows: [5],
    targetColumns: [5],
    verifiedLines: {rows: [], columns: []},
    columnToRowMarks: {},
  },
  {
    selectedIndependentZeros: [
      {x: 4, y: 0},
      {x: 0, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 4},
      {x: 1, y: 3},
    ],
    reachedRows: [3],
    targetColumns: [5],
    verifiedLines: {rows: [5], columns: [1]},
    columnToRowMarks: {'1': 5},
  },
  {
    selectedIndependentZeros: [
      {x: 4, y: 0},
      {x: 0, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 4},
      {x: 1, y: 3},
    ],
    reachedRows: [2],
    targetColumns: [5],
    verifiedLines: {rows: [5, 3], columns: [1, 2]},
    columnToRowMarks: {'1': 5, '2': 3},
  },
  {
    selectedIndependentZeros: [
      {x: 4, y: 0},
      {x: 0, y: 1},
      {x: 5, y: 2},
      {x: 3, y: 4},
      {x: 2, y: 3},
      {x: 1, y: 5},
    ],
  },
];

export const koenigAlgorithmHeuristicsResponseMock1: KoenigAlgoResponse = [
  {
    selectedIndependentZeros: [{x: 0, y: 0}],
    reachedRows: [1, 2, 3, 4, 5],
    targetColumns: [1, 2, 3, 4, 5],
    verifiedLines: {rows: [], columns: []},
    columnToRowMarks: {},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
    ],
    reachedRows: [2, 3, 4, 5],
    targetColumns: [2, 3, 4, 5],
    verifiedLines: {rows: [], columns: []},
    columnToRowMarks: {},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 5},
    ],
    reachedRows: [2, 3, 4],
    targetColumns: [3, 4, 5],
    verifiedLines: {rows: [], columns: []},
    columnToRowMarks: {},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 5},
    ],
    reachedRows: [0],
    targetColumns: [3, 4, 5],
    verifiedLines: {rows: [2, 3, 4], columns: [0]},
    columnToRowMarks: {'0': 2},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 5},
    ],
    strikeThroughs: {rows: [1, 5], columns: [0]},
  },
];

export const koenigAlgorithmHeuristicsResponseMock2: KoenigAlgoResponse = [
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 4, y: 2},
      {x: 1, y: 1},
      {x: 5, y: 4},
      {x: 2, y: 3},
    ],
    reachedRows: [5],
    targetColumns: [3],
    verifiedLines: {rows: [], columns: []},
    columnToRowMarks: {},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 4, y: 2},
      {x: 1, y: 1},
      {x: 5, y: 4},
      {x: 2, y: 3},
    ],
    reachedRows: [4],
    targetColumns: [3],
    verifiedLines: {rows: [5], columns: [5]},
    columnToRowMarks: {'5': 5},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 4, y: 2},
      {x: 1, y: 1},
      {x: 5, y: 4},
      {x: 2, y: 3},
    ],
    reachedRows: [2],
    targetColumns: [3],
    verifiedLines: {rows: [5, 4], columns: [5, 4]},
    columnToRowMarks: {'4': 4, '5': 5},
  },
  {
    selectedIndependentZeros: [
      {x: 0, y: 0},
      {x: 4, y: 2},
      {x: 1, y: 1},
      {x: 5, y: 4},
      {x: 2, y: 3},
    ],
    strikeThroughs: {rows: [0, 1, 3], columns: [4, 5]},
  },
];

export const koenigAlgorithmHeuristicsResponseMock3: KoenigAlgoResponse = [
  {
    selectedIndependentZeros: [
      {x: 1, y: 5},
      {x: 4, y: 0},
      {x: 2, y: 3},
      {x: 5, y: 2},
      {x: 0, y: 1},
      {x: 3, y: 4},
    ],
  },
];
