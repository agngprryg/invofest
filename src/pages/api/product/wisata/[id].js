import clientPromise from "@/lib/mongodb/init";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("guciku");

      const item = await db
        .collection("wisata")
        .findOne({ _id: new ObjectId(id) });
      console.log(item);

      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(item);
    } catch (error) {
      return res.status(500).json({ message: "Internal server eror", error });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
