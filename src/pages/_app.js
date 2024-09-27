import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import { SessionProvider } from "next-auth/react";

// Konfigurasi font
const poppins = Poppins({
  weight: ["400", "600", "700"], // Pilih bobot font
  subsets: ["latin"],
  variable: "--font-poppins", // Definisikan variabel CSS
});

export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
