import {TPData} from '@opres/shared/types';

export const tpDataFirstMock: TPData = {
  costs: [
    {'0': 8, '1': 7, '2': 3, '3': 2},
    {'0': 1, '1': 4, '2': 2, '3': 5},
    {'0': 2, '1': 3, '2': 4, '3': 7},
    {'0': 1, '1': 1, '2': 4, '3': 4},
  ],
  shopDemands: [18, 32, 35, 20],
  storageStocks: [15, 43, 28, 19],
};

export const tpDataSecondMock: TPData = {
  costs: [
    {'0': 1, '1': 5, '2': 4, '3': 3, '4': 2},
    {'0': 1, '1': 1, '2': 0, '3': 3, '4': 7},
    {'0': 6, '1': 3, '2': 2, '3': 8, '4': 4},
    {'0': 1, '1': 1, '2': 5, '3': 2, '4': 3},
  ],
  shopDemands: [12, 7, 6, 10, 4],
  storageStocks: [15, 3, 8, 13],
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
