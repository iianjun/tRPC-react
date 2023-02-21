export interface Folder {
  _id?: string;
  name?: string;
  clientX?: number;
  clientY?: number;
}

export interface FolderInput {
  name: string;
  clientX: number;
  clientY: number;
}
