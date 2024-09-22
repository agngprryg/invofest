import { hash } from "bcryptjs";
import clientPromise from "@/lib/mongodb/init";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All field is required" });
    }

    try {
      const client = await clientPromise;

      const db = client.db();

      const existingUser = await db.collection("users").findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }

      const hashedPassword = await hash(password, 12);

      await db.collection("users").insertOne({
        name,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ success: true, message: "User created" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
