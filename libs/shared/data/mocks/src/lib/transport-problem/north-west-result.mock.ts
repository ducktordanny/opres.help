import {FirstPhaseStep} from '@opres/shared/types';

export const northWestFirstResultMock: Array<FirstPhaseStep> = [
  {
    transportation: [
      {
        '0': {cost: 8, transported: 15},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2},
      },
      {
        '0': {cost: 1},
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
    demands: [3, 32, 35, 20],
    stocks: [0, 43, 28, 19],
  },
  {
    transportation: [
      {
        '0': {cost: 8, transported: 15},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2},
      },
      {
        '0': {cost: 1, transported: 3},
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
    stocks: [0, 40, 28, 19],
  },
  {
    transportation: [
      {
        '0': {cost: 8, transported: 15},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2},
      },
      {
        '0': {cost: 1, transported: 3},
        '1': {cost: 4, transported: 32},
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
    demands: [0, 0, 35, 20],
    stocks: [0, 8, 28, 19],
  },
  {
    transportation: [
      {
        '0': {cost: 8, transported: 15},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2},
      },
      {
        '0': {cost: 1, transported: 3},
        '1': {cost: 4, transported: 32},
        '2': {cost: 2, transported: 8},
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
    demands: [0, 0, 27, 20],
    stocks: [0, 0, 28, 19],
  },
  {
    transportation: [
      {
        '0': {cost: 8, transported: 15},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2},
      },
      {
        '0': {cost: 1, transported: 3},
        '1': {cost: 4, transported: 32},
        '2': {cost: 2, transported: 8},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3},
        '2': {cost: 4, transported: 27},
        '3': {cost: 7},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [0, 0, 0, 20],
    stocks: [0, 0, 1, 19],
  },
  {
    transportation: [
      {
        '0': {cost: 8, transported: 15},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2},
      },
      {
        '0': {cost: 1, transported: 3},
        '1': {cost: 4, transported: 32},
        '2': {cost: 2, transported: 8},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3},
        '2': {cost: 4, transported: 27},
        '3': {cost: 7, transported: 1},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [0, 0, 0, 19],
    stocks: [0, 0, 0, 19],
  },
  {
    transportation: [
      {
        '0': {cost: 8, transported: 15},
        '1': {cost: 7},
        '2': {cost: 3},
        '3': {cost: 2},
      },
      {
        '0': {cost: 1, transported: 3},
        '1': {cost: 4, transported: 32},
        '2': {cost: 2, transported: 8},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3},
        '2': {cost: 4, transported: 27},
        '3': {cost: 7, transported: 1},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 4},
        '3': {cost: 4, transported: 19},
      },
    ],
    demands: [0, 0, 0, 0],
    stocks: [0, 0, 0, 0],
  },
];

export const northWestSecondResultMock: Array<FirstPhaseStep> = [
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
        '1': {cost: 5, transported: 3},
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
    demands: [0, 4, 6, 10, 4],
    stocks: [0, 3, 8, 13],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, transported: 3},
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
    demands: [0, 1, 6, 10, 4],
    stocks: [0, 0, 8, 13],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, transported: 3},
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
        '1': {cost: 3, transported: 1},
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
    demands: [0, 0, 6, 10, 4],
    stocks: [0, 0, 7, 13],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, transported: 3},
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
        '1': {cost: 3, transported: 1},
        '2': {cost: 2, transported: 6},
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
    demands: [0, 0, 0, 10, 4],
    stocks: [0, 0, 1, 13],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, transported: 3},
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
        '1': {cost: 3, transported: 1},
        '2': {cost: 2, transported: 6},
        '3': {cost: 8, transported: 1},
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
    demands: [0, 0, 0, 9, 4],
    stocks: [0, 0, 0, 13],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, transported: 3},
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
        '1': {cost: 3, transported: 1},
        '2': {cost: 2, transported: 6},
        '3': {cost: 8, transported: 1},
        '4': {cost: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 5},
        '3': {cost: 2, transported: 9},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 0, 0, 4],
    stocks: [0, 0, 0, 4],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, transported: 3},
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
        '1': {cost: 3, transported: 1},
        '2': {cost: 2, transported: 6},
        '3': {cost: 8, transported: 1},
        '4': {cost: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 5},
        '3': {cost: 2, transported: 9},
        '4': {cost: 3, transported: 4},
      },
    ],
    demands: [0, 0, 0, 0, 0],
    stocks: [0, 0, 0, 0],
  },
];
