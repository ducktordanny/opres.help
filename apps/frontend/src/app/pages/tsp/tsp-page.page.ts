import {ChangeDetectionStrategy, Component} from '@angular/core';

import {TreeData} from '@opres/ui/tree';

@Component({
  selector: 'tsp-page',
  templateUrl: './tsp.template.html',
  styles: [
    `
      .tab-content-wrapper {
        padding: 8px calc(env(safe-area-inset-right) + 8px) 8px 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TspPageComponent {
  public readonly treeExample: Array<TreeData> = [
    {id: '0', parentId: null, displayId: 1, townId: 0, cost: undefined},
    {id: '02', parentId: '0', displayId: 2, townId: 2, cost: 4},
    {id: '03', parentId: '0', displayId: 3, townId: 3, cost: 1},
    {id: '04', parentId: '0', displayId: 4, townId: 4, cost: 7},
    {id: '01', parentId: '0', displayId: 5, townId: 1, cost: 0},
    {id: '012', parentId: '01', displayId: 6, townId: 2, cost: 6},
    {id: '013', parentId: '01', displayId: 7, townId: 3, cost: 7},
    {id: '014', parentId: '01', displayId: 8, townId: 4, cost: 0},
    {id: '0143', parentId: '014', displayId: 9, townId: 3, cost: 4},
    {id: '0142', parentId: '014', displayId: 10, townId: 2, cost: 0},
    {id: '01423', parentId: '0142', displayId: 11, townId: 3, cost: 0},
    {
      id: '014230',
      parentId: '01423',
      displayId: 12,
      townId: 0,
      cost: 2,
    },
    {id: '031', parentId: '03', displayId: 13, townId: 1, cost: 6},
    {id: '034', parentId: '03', displayId: 14, townId: 4, cost: 7},
    {id: '032', parentId: '03', displayId: 15, townId: 2, cost: 1},
    {id: '0321', parentId: '032', displayId: 16, townId: 1, cost: 7},
    {id: '0324', parentId: '032', displayId: 17, townId: 4, cost: 1},
    {id: '03241', parentId: '0324', displayId: 18, townId: 1, cost: 1},
    {
      id: '032410',
      parentId: '03241',
      displayId: 19,
      townId: 0,
      cost: 1,
    },
  ];
}
