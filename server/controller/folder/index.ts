import Folders from "../../collections/folder";
import { Folder, FolderInput } from "./index.d";
class FoldersController {
  async create(input: FolderInput, userId: string): Promise<boolean> {
    await Folders.create({ ...input, userId });
    return true;
  }

  async getFolders(userId: string): Promise<Folder[]> {
    return await Folders.find({ userId }).lean();
  }
}
export default new FoldersController();
