import {FirstPhaseStep} from '@opres/shared/types';

export const vogelKordaFirstResultMock: Array<FirstPhaseStep> = [
  {
    transportation: [
      {
        '0': {cost: 8},
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
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [18, 13, 35, 20],
    stocks: [15, 43, 28, 0],
    auxiliaryVariables: {
      x: [0, 2, 1, 2],
      y: [1, 1, 1, 0],
    },
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
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [18, 13, 35, 5],
    stocks: [0, 43, 28, 0],
    auxiliaryVariables: {
      x: [1, 1, 1, 3],
      y: [1, 1, 1, null],
    },
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
        '0': {cost: 1},
        '1': {cost: 4},
        '2': {cost: 2, transported: 35},
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
    demands: [18, 13, 0, 5],
    stocks: [0, 8, 28, 0],
    auxiliaryVariables: {
      x: [1, 1, 2, 2],
      y: [null, 1, 1, null],
    },
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
        '0': {cost: 1, transported: 8},
        '1': {cost: 4},
        '2': {cost: 2, transported: 35},
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
    demands: [10, 13, 0, 5],
    stocks: [0, 0, 28, 0],
    auxiliaryVariables: {
      x: [1, 1, null, 2],
      y: [null, 3, 1, null],
    },
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
        '0': {cost: 1, transported: 8},
        '1': {cost: 4},
        '2': {cost: 2, transported: 35},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3},
        '2': {cost: 4},
        '3': {cost: 7, transported: 5},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [10, 13, 0, 0],
    stocks: [0, 0, 23, 0],
    auxiliaryVariables: {
      x: [2, 3, null, 7],
      y: [null, null, 1, null],
    },
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
        '0': {cost: 1, transported: 8},
        '1': {cost: 4},
        '2': {cost: 2, transported: 35},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2},
        '1': {cost: 3, transported: 13},
        '2': {cost: 4},
        '3': {cost: 7, transported: 5},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4},
        '3': {cost: 4},
      },
    ],
    demands: [10, 0, 0, 0],
    stocks: [0, 0, 10, 0],
    auxiliaryVariables: {
      x: [2, 3, null, null],
      y: [null, null, 1, null],
    },
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
        '0': {cost: 1, transported: 8},
        '1': {cost: 4},
        '2': {cost: 2, transported: 35},
        '3': {cost: 5},
      },
      {
        '0': {cost: 2, transported: 10},
        '1': {cost: 3, transported: 13},
        '2': {cost: 4},
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
    auxiliaryVariables: {
      x: [2, null, null, null],
      y: [null, null, 2, null],
    },
  },
];

export const vogelKordaSecondResultMock: Array<FirstPhaseStep> = [
  {
    transportation: [
      {
        '0': {cost: 1},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 0, transported: 3},
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
    demands: [12, 7, 3, 10, 4],
    stocks: [15, 0, 8, 13],
    auxiliaryVariables: {x: [0, 0, 2, 1, 1], y: [1, 1, 1, 0]},
  },
  {
    transportation: [
      {
        '0': {cost: 1},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 0, transported: 3},
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
        '1': {cost: 1, transported: 7},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [12, 0, 3, 10, 4],
    stocks: [15, 0, 8, 6],
    auxiliaryVariables: {
      x: [0, 2, 2, 1, 1],
      y: [1, null, 1, 0],
    },
  },
  {
    transportation: [
      {
        '0': {cost: 1},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 0, transported: 3},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 3},
        '3': {cost: 8},
        '4': {cost: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 7},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [12, 0, 0, 10, 4],
    stocks: [15, 0, 5, 6],
    auxiliaryVariables: {
      x: [0, null, 2, 1, 1],
      y: [1, null, 2, 1],
    },
  },
  {
    transportation: [
      {
        '0': {cost: 1},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3},
        '4': {cost: 2},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 0, transported: 3},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 3},
        '3': {cost: 8},
        '4': {cost: 4, transported: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 7},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [12, 0, 0, 10, 0],
    stocks: [15, 0, 1, 6],
    auxiliaryVariables: {
      x: [0, null, null, 1, 1],
      y: [1, null, 2, 1],
    },
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
        '1': {cost: 1},
        '2': {cost: 0, transported: 3},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 3},
        '3': {cost: 8},
        '4': {cost: 4, transported: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 7},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 0, 10, 0],
    stocks: [3, 0, 1, 6],
    auxiliaryVariables: {
      x: [0, null, null, 1, null],
      y: [2, null, 2, 1],
    },
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
        '1': {cost: 1},
        '2': {cost: 0, transported: 3},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 3},
        '3': {cost: 8, transported: 1},
        '4': {cost: 4, transported: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 7},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 0, 9, 0],
    stocks: [3, 0, 0, 6],
    auxiliaryVariables: {
      x: [null, null, null, 1, null],
      y: [3, null, 8, 2],
    },
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3, transported: 3},
        '4': {cost: 2},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 0, transported: 3},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 3},
        '3': {cost: 8, transported: 1},
        '4': {cost: 4, transported: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 7},
        '2': {cost: 5},
        '3': {cost: 2},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 0, 6, 0],
    stocks: [0, 0, 0, 6],
    auxiliaryVariables: {
      x: [null, null, null, 1, null],
      y: [3, null, null, 2],
    },
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5},
        '2': {cost: 4},
        '3': {cost: 3, transported: 3},
        '4': {cost: 2},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1},
        '2': {cost: 0, transported: 3},
        '3': {cost: 3},
        '4': {cost: 7},
      },
      {
        '0': {cost: 6},
        '1': {cost: 3},
        '2': {cost: 2, transported: 3},
        '3': {cost: 8, transported: 1},
        '4': {cost: 4, transported: 4},
      },
      {
        '0': {cost: 1},
        '1': {cost: 1, transported: 7},
        '2': {cost: 5},
        '3': {cost: 2, transported: 6},
        '4': {cost: 3},
      },
    ],
    demands: [0, 0, 0, 0, 0],
    stocks: [0, 0, 0, 0],
    auxiliaryVariables: {
      x: [null, null, null, 2, null],
      y: [null, null, null, 2],
    },
  },
];
