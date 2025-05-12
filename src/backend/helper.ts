import { UsersDataProps } from "@/backend/interface";

export const getUserData = (users: UsersDataProps[]) => {
  return users.map((user) => ({
    fullName: user.fullName,
    email: user.email,
    mobile: user.mobile,
    role: user.role,
    id: user.id,
  }));
};
