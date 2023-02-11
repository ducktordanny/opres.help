export interface TreeData {
  id: string;
  displayId: number;
  parentId: string | null;
  cost?: number;
  townId?: number;
}
