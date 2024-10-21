import User from "@/models/User";
import Order from "@/models/Order";
import dbConnect from "@/lib/mongodb/dbConnect";
import { useSession } from "next-auth/react";

const checkout = async (req, res) => {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metode tidak diizinkan" });
  }

  const session = await useSession({ req });

  const { customer, items, payment_method } = req.body;

  // Validasi input
  if (!customer || !items || items.length === 0 || !payment_method) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  try {
    // Hitung total harga pesanan
    let total_price = 0;
    items.forEach((item) => {
      total_price += item.price_per_unit * item.quantity;
    });

    // Buat objek pesanan
    const newOrder = new Order({
      date,
      customer,
      items,
      total_price,
      payment_method: "midtrans",
      payment_status: "pending",
    });

    // Cek apakah ada session (contohnya menggunakan req.session.userId)
    if (session && session.userId) {
      // Jika ada session, update data user di koleksi `users`
      const updatedUser = await User.findByIdAndUpdate(
        req.session.userId,
        { $push: { orders: newOrder._id } }, // Tambahkan ID pesanan ke dalam array orders di user
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User tidak ditemukan" });
      }

      // Simpan pesanan ke dalam koleksi `orders`
      const savedOrder = await newOrder.save();

      return res.status(201).json({
        message: "Checkout berhasil, pesanan ditambahkan ke akun user",
        order: savedOrder,
      });
    } else {
      // Jika tidak ada session, simpan pesanan langsung ke koleksi `orders`
      const savedOrder = await newOrder.save();

      return res.status(201).json({
        message: "Checkout berhasil, pesanan disimpan",
        session: session,
        order: savedOrder,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

export default checkout;
