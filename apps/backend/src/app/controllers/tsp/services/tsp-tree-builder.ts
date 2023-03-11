import {TspTreeData} from '@opres/shared/types';
import {cloneDeep} from 'lodash';

export class TspTreeBuilder {
  private graphIdCounter = 1;
  private tree: Array<TspTreeData> = [];

  constructor(townId: number) {
    this.addNode(null, townId);
  }

  public getCurrentTree(): Array<TspTreeData> {
    return cloneDeep(this.tree);
  }

  public addNode(parentId: string | null, townId: number, cost?: number): string {
    const displayId = this.graphIdCounter;
    const id = (parentId ?? '') + townId.toString();
    this.tree.push({id, parentId, displayId, townId, cost});
    this.graphIdCounter++;
    return id;
  }
}
