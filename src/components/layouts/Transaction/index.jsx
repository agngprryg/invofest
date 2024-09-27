import Footer from "@/components/fragments/Footer";
import Navbar from "@/components/fragments/Navbar";
import { Circle } from "@phosphor-icons/react";
import { useRouter } from "next/router";

const DetailWisataLayout = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const currentRoute = router.asPath;

  return (
    <>
      <Navbar />
      <div className="lg:-mt-28 p-[10px] md:p-[50px] lg:px-36 lg:py-20 bg-white lg:rounded-t-[120px]">
        <div className="mb-10 lg:mb-20 flex flex-wrap-reverse justify-between items-start">
          <div className="mt-10 lg:mt-0">
            <h1 className="lg:text-xl font-semibold">Detail Pesanan Kamu</h1>
            <p className="mt-2 lg:mt-5 text-xs lg:text-sm">
              Pastikan kamu mengisi data dengan benar ya
            </p>
          </div>
          <div className="flex gap-3 lg:gap-5">
            <p
              className={`text-xs ${
                currentRoute.includes("/widget") ? "text-orange" : ""
              }`}
            >
              Detail pesanan
            </p>
            <Circle weight="fill" width={5} />
            <p
              className={`text-xs ${
                currentPath === "/widget/payment" ? "text-orange" : ""
              }`}
            >
              Selesaikan pembayaran
            </p>
            <Circle weight="fill" width={5} />
            <p
              className={`text-xs ${
                currentPath === "/success" ? "text-orange" : ""
              }`}
            >
              Pesanan berhasil
            </p>
          </div>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default DetailWisataLayout;
