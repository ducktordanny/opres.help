import {cloneDeep} from 'lodash';

export interface TreeData {
  id: string;
  parentId: string | null;
  displayId: number;
  cost?: number;
  townId?: number;
}

export class TspTreeBuilder {
  private graphIdCounter = 1;
  private tree: Array<TreeData> = [];

  constructor(townId: number) {
    this.addNode(null, townId);
  }

  public getCurrentTree(): Array<TreeData> {
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