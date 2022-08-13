import {FirstPhaseStep} from '@opres/shared/types';

export const tableMinimumFirstResultMock: Array<FirstPhaseStep> = [
  {
    transportation: [
      {
        '0': {cost: 8},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2},
      },
      {
        '0': {cost: 1, transported: 18},
        '1': {cost: 4},
        '2': {cost: 2},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3},
        '2': {cost: 4},
        '3': {cost: 7},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [0, 32, 35, 20],
    stocks: [15, 25, 28, 19],
  },
  {
    transportation: [
      {
        '0': {cost: 8},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2},
      },
      {
        '0': {cost: 1, transported: 18},
        '1': {cost: 4},
        '2': {cost: 2},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3},
        '2': {cost: 4},
        '3': {cost: 7},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [0, 13, 35, 20],
    stocks: [15, 25, 28, 0],
  },
  {
    transportation: [
      {
        '0': {cost: 8},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2, transported: 15},
      },
      {
        '0': {cost: 1, transported: 18},
        '1': {cost: 4},
        '2': {cost: 2},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3},
        '2': {cost: 4},
        '3': {cost: 7},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [0, 13, 35, 5],
    stocks: [0, 25, 28, 0],
  },
  {
    transportation: [
      {
        '0': {cost: 8},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2, transported: 15},
      },
      {
        '0': {cost: 1, transported: 18},
        '1': {cost: 4},
        '2': {cost: 2, transported: 25},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3},
        '2': {cost: 4},
        '3': {cost: 7},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [0, 13, 10, 5],
    stocks: [0, 0, 28, 0],
  },
  {
    transportation: [
      {
        '0': {cost: 8},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2, transported: 15},
      },
      {
        '0': {cost: 1, transported: 18},
        '1': {cost: 4},
        '2': {cost: 2, transported: 25},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3, transported: 13},
        '2': {cost: 4},
        '3': {cost: 7},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [0, 0, 10, 5],
    stocks: [0, 0, 15, 0],
  },
  {
    transportation: [
      {
        '0': {cost: 8},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2, transported: 15},
      },
      {
        '0': {cost: 1, transported: 18},
        '1': {cost: 4},
        '2': {cost: 2, transported: 25},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3, transported: 13},
        '2': {cost: 4, transported: 10},
        '3': {cost: 7},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [0, 0, 0, 5],
    stocks: [0, 0, 5, 0],
  },
  {
    transportation: [
      {
        '0': {cost: 8},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2, transported: 15},
      },
      {
        '0': {cost: 1, transported: 18},
        '1': {cost: 4},
        '2': {cost: 2, transported: 25},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3, transported: 13},
        '2': {cost: 4, transported: 10},
        '3': {cost: 7, transported: 5},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [0, 0, 0, 0],
    stocks: [0, 0, 0, 0],
  },
];

export const tableMinimumSecondResultMock: Array<FirstPhaseStep> = [
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 0},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2},
        '3': {cost: 8},
        '4': {cost: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [0, 7, 6, 10, 4],
    stocks: [3, 3, 8, 13],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 3},
        '2': {cost: 0},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2},
        '3': {cost: 8},
        '4': {cost: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [0, 4, 6, 10, 4],
    stocks: [3, 0, 8, 13],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2},
      },
      {
        '0': {
          cost: 1,
        },
        '1': {cost: 1, transported: 3},
        '2': {cost: 0},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2},
        '3': {cost: 8},
        '4': {cost: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 4},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 6, 10, 4],
    stocks: [3, 0, 8, 9],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2, transported: 3},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 3},
        '2': {cost: 0},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2},
        '3': {cost: 8},
        '4': {cost: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 4},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 6, 10, 1],
    stocks: [0, 0, 8, 9],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2, transported: 3},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 3},
        '2': {cost: 0},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 6},
        '3': {cost: 8},
        '4': {cost: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 4},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 0, 10, 1],
    stocks: [0, 0, 2, 9],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2, transported: 3},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 3},
        '2': {cost: 0},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 6},
        '3': {cost: 8},
        '4': {cost: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 4},
        '2': {cost: 5},
        '3': {cost: 2, transported: 9},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 0, 1, 1],
    stocks: [0, 0, 2, 0],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2, transported: 3},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 3},
        '2': {cost: 0},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 6},
        '3': {cost: 8},
        '4': {cost: 4, transported: 1},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 4},
        '2': {cost: 5},
        '3': {cost: 2, transported: 9},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 0, 1, 0],
    stocks: [0, 0, 1, 0],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2, transported: 3},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 3},
        '2': {cost: 0},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 6},
        '3': {cost: 8, transported: 1},
        '4': {cost: 4, transported: 1},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 4},
        '2': {cost: 5},
        '3': {cost: 2, transported: 9},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 0, 0, 0],
    stocks: [0, 0, 0, 0],
  },
];
