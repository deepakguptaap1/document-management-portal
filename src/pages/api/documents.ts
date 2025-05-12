import { UsersDataApiProps } from "@/backend/interface";
import { users } from "@/backend/mockData";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersDataApiProps>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const user = users.find((u) => u.id === id);
    if (!user) {
      return res.status(401).json({ message: "Invalid user id", data: [] });
    }
    return res.status(200).json({
      message: "Documnet fetched successful",
      data: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        files: user.files,
      },
    });
  }

  if (req.method === "POST") {
    const { id, files } = req.body;
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
      return res.status(401).json({ message: "Invalid user id", data: [] });
    }
    const newData = { ...users[index], files: files };
    users[index] = newData;

    return res.status(200).json({
      message: "Document upload successful",
      data: newData,
    });
  }

  if (req.method === "PUT") {
    const { id, files } = req.body;
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
      return res.status(401).json({ message: "Invalid user id", data: [] });
    }
    const newData = { ...users[index], files: files };
    users[index] = newData;

    return res.status(200).json({
      message: "Document Deletion successful",
      data: newData,
    });
  }

  res.status(405).end();
}
