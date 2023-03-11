import {TspTreeData} from '@opres/shared/types';

import {TspTreeBuilder} from '../tsp-tree-builder';

const treeMock: Array<TspTreeData> = [
  {id: '0', parentId: null, displayId: 1, townId: 0, cost: undefined},
  {id: '01', parentId: '0', displayId: 2, townId: 1, cost: 2},
  {id: '02', parentId: '0', displayId: 3, townId: 2, cost: 4},
  {id: '03', parentId: '0', displayId: 4, townId: 3, cost: 1},
  {id: '013', parentId: '01', displayId: 5, townId: 3, cost: 0},
  {id: '022', parentId: '02', displayId: 6, townId: 2, cost: 0},
];

describe('TspTreeBuilder', () => {
  let builder: TspTreeBuilder;

  beforeEach(() => {
    builder = new TspTreeBuilder(0);
  });

  it('should add new nodes', () => {
    builder.addNode('0', 1, 2);
    builder.addNode('0', 2, 4);
    builder.addNode('0', 3, 1);
    builder.addNode('01', 3, 0);
    builder.addNode('02', 2, 0);
    expect(builder.getCurrentTree()).toEqual(treeMock);
  });
});
