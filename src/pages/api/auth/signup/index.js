import bcrypt from "bcryptjs"; // Untuk enkripsi password
import User from "@/models/User";
import dbConnect from "@/lib/mongodb/dbConnect";

const signUp = async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Validasi input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }

    // Cek apakah email sudah terdaftar
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email sudah terdaftar" });
      }

      // Enkripsi password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Membuat user baru
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      // Simpan user ke database
      const savedUser = await newUser.save();

      return res.status(201).json({
        success: true,
        user: {
          id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Terjadi kesalahan server" });
    }
  } else {
    return res.status(405).json({ message: "Metode tidak diizinkan" });
  }
};

export default signUp;
