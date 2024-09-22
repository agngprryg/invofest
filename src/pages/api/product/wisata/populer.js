import clientPromise from "@/lib/mongodb/init";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;

    const db = client.db("guciku");
    const collection = db.collection("wisata");

    const data = await collection.find({}).limit(3).toArray();

    res.status(200).json(data);

    // res.status(200).json({ message: "database succesfully connnected" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "database connection failed", error: error.message });
  }
}
