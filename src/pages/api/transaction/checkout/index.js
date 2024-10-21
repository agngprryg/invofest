import clientPromise from "@/lib/mongodb/init";
import Midtrans from "midtrans-client";
import nodemailer from "nodemailer";

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

      const generateIdOrder = newOrder.insertedId.toString();

      let snap = new Midtrans.Snap({
        isProduction: false,
        serverKey: process.env.SERVER_KEY_MIDTRANS,
        clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY_MIDTRANS,
      });

      let transactionParams = {
        transaction_details: {
          order_id: generateIdOrder,
          gross_amount: total_price,
        },
        customer_details: {
          first_name: name,
          email: email,
        },
        item_details: [
          {
            id: generateIdOrder,
            price: total_price / quantity,
            quantity: quantity,
            name: wisata,
          },
        ],
        callbacks: {
          finish: "http://localhost:3000/widget/success",
        },
      };

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `halo kak ${name}  Yeayy pesanan kamu berhasil dengan no transaksi : ${generateIdOrder}`,
        text: `Terimakasih udah pesen di guciku.co Semoga Liburan kamu Menyenangkan
        detail Transaksi kamu :

        Order id : ${generateIdOrder}
        jumlah : ${quantity},
        total Harga : ${total_price}
        status : pending
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        await db.collection("orders").deleteOne({ _id: newOrder.insertedId });

        return res.status(500).json({
          success: false,
          message: "Order failed. Unable to send confirmation email.",
        });
      }

      const transaction = await snap.createTransactionToken(transactionParams);

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
