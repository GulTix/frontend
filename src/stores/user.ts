import { map } from "nanostores";

interface User {
  isLoggedIn: boolean;
  user?: {
    id: string;
    role: string;
    username: string;
    email: string;
  };
}

export const UserStore = map<User>({
  isLoggedIn: false,
});
