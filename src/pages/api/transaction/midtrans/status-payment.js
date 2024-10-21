import Midtrans from "midtrans-client";

const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY_MIDTRANS, // Pastikan .env sudah benar
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { token } = req.body; // Mengambil token dari request body

    // Validasi jika token tidak ada
    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    try {
      // Memeriksa status pembayaran berdasarkan token (order_id atau transaction_id)
      const transactionStatus = await snap.transaction.status(token);

      // Jika status transaksi berhasil diambil, kirimkan respons 200
      return res.status(200).json(transactionStatus);
    } catch (error) {
      // Jika ada error, kirimkan pesan error dan log error untuk debugging
      console.error("Error fetching transaction status:", error.message);
      return res.status(500).json({
        message: "Terjadi kesalahan saat mengambil status pembayaran",
        error: error.message,
      });
    }
  } else {
    // Jika metode request selain POST
    return res.status(405).json({ message: "Method not allowed" });
  }
}
