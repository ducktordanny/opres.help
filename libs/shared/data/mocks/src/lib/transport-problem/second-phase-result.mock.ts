import {SecondPhaseStep} from '@opres/shared/types';

export const secondPhaseFirstResultMock: Array<SecondPhaseStep> = [
  {
    transportation: [
      {
        '0': {cost: 8, reducedCost: 11},
        '1': {cost: 7, reducedCost: 9},
        '2': {cost: 3, reducedCost: 5},
        '3': {cost: 2, transported: 15},
      },
      {
        '0': {cost: 1, transported: 8},
        '1': {cost: 4, reducedCost: 2},
        '2': {cost: 2, transported: 35},
        '3': {cost: 5, reducedCost: -1},
      },
      {
        '0': {cost: 2, transported: 10},
        '1': {cost: 3, transported: 13},
        '2': {cost: 4, reducedCost: 1},
        '3': {cost: 7, transported: 5},
      },
      {
        '0': {cost: 1, reducedCost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4, reducedCost: 3},
        '3': {cost: 4, reducedCost: -1},
      },
    ],
    auxiliaryVariables: {
      x: [-3, -2, -2, 2],
      y: [0, 4, 5, 3],
    },
    nextBase: {value: -1, x: 3, y: 1},
    circle: [
      {value: -1, x: 3, y: 1},
      {x: 3, y: 2, value: 5},
      {x: 0, y: 2, value: 10},
      {x: 0, y: 1, value: 8},
    ],
  },
  {
    transportation: [
      {
        '0': {cost: 8, reducedCost: 10},
        '1': {cost: 7, reducedCost: 8},
        '2': {cost: 3, reducedCost: 4},
        '3': {cost: 2, transported: 15},
      },
      {
        '0': {cost: 1, transported: 3},
        '1': {cost: 4, reducedCost: 2},
        '2': {cost: 2, transported: 35},
        '3': {cost: 5, transported: 5},
      },
      {
        '0': {cost: 2, transported: 15},
        '1': {cost: 3, transported: 13},
        '2': {cost: 4, reducedCost: 1},
        '3': {cost: 7, reducedCost: 1},
      },
      {
        '0': {cost: 1, reducedCost: 1},
        '1': {cost: 1, transported: 19},
        '2': {cost: 4, reducedCost: 3},
        '3': {cost: 4, reducedCost: 0},
      },
    ],
    auxiliaryVariables: {
      x: [-2, -1, -1, 2],
      y: [0, 3, 4, 2],
    },
  },
];

export const secondPhaseSecondResultMock: Array<SecondPhaseStep> = [
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, reducedCost: 3},
        '2': {cost: 4, reducedCost: 7},
        '3': {cost: 3, transported: 3},
        '4': {cost: 2, reducedCost: 3},
      },
      {
        '0': {cost: 1, reducedCost: -3},
        '1': {cost: 1, reducedCost: -4},
        '2': {cost: 0, transported: 3},
        '3': {cost: 3, reducedCost: -3},
        '4': {cost: 7, reducedCost: 5},
      },
      {
        '0': {cost: 6, reducedCost: 0},
        '1': {cost: 3, reducedCost: -4},
        '2': {cost: 2, transported: 3},
        '3': {cost: 8, transported: 1},
        '4': {cost: 4, transported: 4},
      },
      {
        '0': {cost: 1, reducedCost: 1},
        '1': {cost: 1, transported: 7},
        '2': {cost: 5, reducedCost: 9},
        '3': {cost: 2, transported: 6},
        '4': {cost: 3, reducedCost: 5},
      },
    ],
    auxiliaryVariables: {
      x: [1, 2, -3, 3, -1],
      y: [0, 3, 5, -1],
    },
    nextBase: {value: -4, x: 1, y: 1},
    circle: [
      {value: -1, x: 1, y: 1},
      {x: 1, y: 3, value: 7},
      {x: 3, y: 3, value: 6},
      {x: 3, y: 2, value: 1},
      {x: 2, y: 2, value: 3},
      {x: 2, y: 1, value: 3},
    ],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, reducedCost: 3},
        '2': {cost: 4, reducedCost: 3},
        '3': {cost: 3, transported: 3},
        '4': {cost: 2, reducedCost: -1},
      },
      {
        '0': {cost: 1, reducedCost: 1},
        '1': {cost: 1, transported: 1},
        '2': {cost: 0, transported: 2},
        '3': {cost: 3, reducedCost: 1},
        '4': {cost: 7, reducedCost: 5},
      },
      {
        '0': {cost: 6, reducedCost: 4},
        '1': {cost: 3, reducedCost: 0},
        '2': {cost: 2, transported: 4},
        '3': {cost: 8, reducedCost: 4},
        '4': {cost: 4, transported: 4},
      },
      {
        '0': {cost: 1, reducedCost: 1},
        '1': {cost: 1, transported: 6},
        '2': {cost: 5, reducedCost: 5},
        '3': {cost: 2, transported: 7},
        '4': {cost: 3, reducedCost: 1},
      },
    ],
    auxiliaryVariables: {
      x: [1, 2, 1, 3, 3],
      y: [0, -1, 1, -1],
    },
    nextBase: {value: -1, x: 4, y: 0},
    circle: [
      {value: -1, x: 4, y: 0},
      {x: 4, y: 2, value: 4},
      {x: 2, y: 2, value: 4},
      {x: 2, y: 1, value: 2},
      {x: 1, y: 1, value: 1},
      {x: 1, y: 3, value: 6},
      {x: 3, y: 3, value: 7},
      {x: 3, y: 0, value: 3},
    ],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, reducedCost: 3},
        '2': {cost: 4, reducedCost: 4},
        '3': {cost: 3, transported: 1},
        '4': {cost: 2, transported: 2},
      },
      {
        '0': {cost: 1, reducedCost: 1},
        '1': {cost: 1, transported: 3},
        '2': {cost: 0, reducedCost: 1},
        '3': {cost: 3, reducedCost: 1},
        '4': {cost: 7, reducedCost: 6},
      },
      {
        '0': {cost: 6, reducedCost: 3},
        '1': {cost: 3, reducedCost: -1},
        '2': {cost: 2, transported: 6},
        '3': {cost: 8, reducedCost: 3},
        '4': {cost: 4, transported: 2},
      },
      {
        '0': {cost: 1, reducedCost: 1},
        '1': {cost: 1, transported: 4},
        '2': {cost: 5, reducedCost: 6},
        '3': {cost: 2, transported: 9},
        '4': {cost: 3, reducedCost: 2},
      },
    ],
    auxiliaryVariables: {
      x: [1, 2, 0, 3, 2],
      y: [0, -1, 2, -1],
    },
    nextBase: {value: -1, x: 1, y: 2},
    circle: [
      {value: -1, x: 1, y: 2},
      {x: 1, y: 3, value: 4},
      {x: 3, y: 3, value: 9},
      {x: 3, y: 0, value: 1},
      {x: 4, y: 0, value: 2},
      {x: 4, y: 2, value: 2},
    ],
  },
  {
    transportation: [
      {
        '0': {cost: 1, transported: 12},
        '1': {cost: 5, reducedCost: 4},
        '2': {cost: 4, reducedCost: 4},
        '3': {cost: 3, reducedCost: 1},
        '4': {cost: 2, transported: 3},
      },
      {
        '0': {cost: 1, reducedCost: 0},
        '1': {cost: 1, transported: 3},
        '2': {cost: 0, reducedCost: 0},
        '3': {cost: 3, reducedCost: 1},
        '4': {cost: 7, reducedCost: 5},
      },
      {
        '0': {cost: 6, reducedCost: 3},
        '1': {cost: 3, transported: 1},
        '2': {cost: 2, transported: 6},
        '3': {cost: 8, reducedCost: 4},
        '4': {cost: 4, transported: 1},
      },
      {
        '0': {cost: 1, reducedCost: 0},
        '1': {cost: 1, transported: 3},
        '2': {cost: 5, reducedCost: 5},
        '3': {cost: 2, transported: 10},
        '4': {cost: 3, reducedCost: 1},
      },
    ],
    auxiliaryVariables: {
      x: [1, 1, 0, 2, 2],
      y: [0, 0, 2, 0],
    },
  },
];
