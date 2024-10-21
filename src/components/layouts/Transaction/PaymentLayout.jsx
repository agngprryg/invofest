import BreadCumb from "@/components/elements/BreadCumb";
import Footer from "@/components/fragments/Footer";
import Navbar from "@/components/fragments/Navbar";
import { Circle } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import React from "react";

const PaymentLayout = ({ children }) => {
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
              Coba Dicek Lagi Apa Pesanan Kamu Udah Sesuai?
            </p>
          </div>
          <BreadCumb route={currentRoute} path={currentPath} />
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default PaymentLayout;
