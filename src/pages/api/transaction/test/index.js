import dbConnect from "@/lib/mongodb/dbConnect";
import Test from "@/models/test";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const test = new Test(req.body);

    await test.save();

    res.status(201).json({ success: true, data: test });
  } catch (error) {
    res.status(400).json({ success: true, message: error.message });
  }
}
