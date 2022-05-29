import {Result, TPData} from '../transport-problem.types';

export const tpDataMock: TPData = {
  costs: [
    {'0': 8, '1': 7, '2': 3, '3': 2},
    {'0': 1, '1': 4, '2': 2, '3': 5},
    {'0': 2, '1': 3, '2': 4, '3': 7},
    {'0': 1, '1': 1, '2': 4, '3': 4},
  ],
  shopDemands: [18, 32, 35, 20],
  storageStocks: [15, 43, 28, 19],
};

export const invalidTpDataMock: TPData = {
  costs: [
    {'0': 8, '1': 7, '2': 3, '3': 2},
    {'0': 1, '1': 4, '2': 2, '3': 5},
    {'0': 2, '1': 3, '2': 4, '3': 7},
    {'0': 1, '1': 1, '2': 4, '3': 4},
  ],
  shopDemands: [18, 32, 0, 20],
  storageStocks: [15, 43, 28, 19],
};

export const resultMock: Result = {
  epsilon: 458,
  table: [
    {
      0: {cost: 8, transported: 15},
      1: {cost: 7},
      2: {cost: 3},
      3: {cost: 2},
    },
    {
      0: {cost: 1, transported: 3},
      1: {cost: 4, transported: 32},
      2: {cost: 2, transported: 8},
      3: {cost: 5},
    },
    {
      0: {cost: 2},
      1: {cost: 3},
      2: {cost: 4, transported: 27},
      3: {cost: 7, transported: 1},
    },
    {
      0: {cost: 1},
      1: {cost: 1},
      2: {cost: 4},
      3: {cost: 4, transported: 19},
    },
  ],
};
