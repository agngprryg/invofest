import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" w-full flex flex-wrap items-center justify-between py-10 px-5 md:px-14 lg:px-20 bg-[#1c2931]">
        <div>
          <Image
            width="200"
            height="200"
            src="/assets/logoGuci/guci-white.png"
            className="mb-5 w-[105px] md:w-[150px] lg:w-[150px]]"
          />
          <div className="mt-10">
            <h1 className="mb-2 text-white text-sm">
              Ada Masalah Terkait Pemesanan? Sini Cerita
            </h1>
            <button className="px-5 py-1 text-xs text-white bg-blue shadow-white shadow rounded-lg">
              Hubungi kami
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 text-white text-xs font-light opacity-90 gap-5 lg:gap-y-5 lg:gap-x-10 ">
          <p>Bantuan</p>
          <p>Pertanyaan</p>
          <p>Wisata</p>
          <p>Penginapan</p>
          <p>Kebijakan</p>
          <p>Support</p>
          <p>S&K</p>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center py-2 px-5 md:px-14 lg:px-20 bg-[#1d3a76]">
        <p className="text-xs text-white opacity-70">
          &copy;2024 Guciku All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
