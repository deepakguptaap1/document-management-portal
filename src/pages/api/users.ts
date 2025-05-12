import { UsersDataApiProps } from "@/backend/interface";
import { users } from "@/backend/mockData";
import { getUserData } from "@/backend/helper";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersDataApiProps>
) {
  if (req.method === "GET") {
    return res
      .status(200)
      .json({ message: "User fetched", data: getUserData(users) });
  }

  if (req.method === "PUT") {
    const { id, newRole } = req.body;
    const index = users.findIndex((user) => user.id === id);
    if (index === -1)
      return res.status(404).json({ message: "User not found", data: [] });

    users[index] = { ...users[index], role: newRole };
    return res
      .status(200)
      .json({ message: "User updated", data: getUserData(users) });
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    const index = users.findIndex((user) => user.id === id);
    if (index === -1)
      return res.status(404).json({ message: "User not found", data: [] });

    users.splice(index, 1);
    return res
      .status(200)
      .json({ message: "User deleted", data: getUserData(users) });
  }

  if (req.method === "POST") {
    const { payload } = req.body;
    const lastUserID = users[users.length - 1].id;
    const newId = `DMP${Number(lastUserID.slice(3)) + 1}`;
    const newUser = {
      id: newId,
      ...payload,
      role: "User",
      files: [],
    };

    users.push(newUser);
    delete newUser.password;
    //Implement JWT token feature
    return res.status(201).json({ message: "User registered", data: newUser });
  }

  res.status(405).end();
}
