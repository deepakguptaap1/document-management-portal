import { UsersDataApiProps } from "@/backend/interface";
import { users } from "@/backend/mockData";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersDataApiProps>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials", data: [] });
    }

    //Implement JWT token feature
    return res.status(200).json({
      message: "Login successful",
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

  res.status(405).end(); // Method Not Allowed
}
