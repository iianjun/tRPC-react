import { User, UserInput } from "./index.d";
import Users from "../../collections/user";

export class UsersController {
  async create(input: UserInput) {
    await Users.create(input);
    return true;
  }
  async get(id: string): Promise<User> {
    try {
      const user: User = await Users.findById(id).lean();
      return user;
    } catch (e) {
      throw e;
    }
  }
  async update(input: UserInput, userId: string): Promise<boolean> {
    await Users.findByIdAndUpdate(userId, input);
    return true;
  }
}
export default new UsersController();
