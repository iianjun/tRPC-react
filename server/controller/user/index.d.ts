export interface UserInput {
  email?: string | null;
  password?: string | null;
  background?: string | null;
}

export interface User {
  email: string;
  password: string;
  background?: string;
}
