import clientPromise from "@/lib/mongodb/init";
import Midtrans from "midtrans-client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { date, name, email, quantity, wisata, total_price } = req.body;

    if (!date || !name || !email || !quantity || !wisata) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const client = await clientPromise;
      const db = client.db();

      const newOrder = await db.collection("orders").insertOne({
        date,
        name,
        email,
        quantity,
        wisata,
        total_price,
        status: "pending",
      });

      let snap = new Midtrans.Snap({
        isProduction: false,
        serverKey: process.env.SERVER_KEY_MIDTRANS,
        clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY_MIDTRANS,
      });

      let transactionParams = {
        transaction_details: {
          order_id: newOrder.insertedId.toString(),
          gross_amount: total_price,
        },
        customer_details: {
          first_name: name,
          email: email,
        },
        item_details: [
          {
            id: newOrder.insertedId.toString(),
            price: total_price / quantity,
            quantity: quantity,
            name: wisata,
          },
        ],
      };

      const transaction = await snap.createTransactionToken(transactionParams);
      console.log(transaction);

      res.status(201).json({
        success: true,
        message: "Pesanan Berhasil Dibuat",
        token: transaction,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
