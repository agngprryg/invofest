import Link from "next/link";
import React from "react";

const NavHead = () => {
  return (
    <>
      <div className="px-5 lg:px-10 py-3 flex items-center justify-between border-b border-white">
        <img
          src="/assets/logoGuci/guci-white.png"
          alt=""
          className="w-[105px] md:w-[150px] lg:w-[150px] -mt-2"
        />
        <div className="flex items-center gap-28">
          <div className="hidden md:hidden lg:flex gap-10 items-center text-white">
            <Link
              href="/beranda"
              className="text-sm hover:scale-110 transition-all ease-in-out"
            >
              Beranda
            </Link>
            <Link
              href="/penginapan"
              className="text-sm hover:scale-110 transition-all ease-in-out"
            >
              Penginapan
            </Link>
            <Link
              href="/wisata"
              className="text-sm hover:scale-110 transition-all ease-in-out"
            >
              Wisata
            </Link>
            <Link
              href="/pesananSaya"
              className="text-sm hover:scale-110 transition-all ease-in-out"
            >
              Pesanan Saya
            </Link>
          </div>
          <div className="flex gap-2">
            <Link
              href=""
              className="px-4 py-1 text-xs font-semibold rounded-lg text-white border "
            >
              Masuk
            </Link>
            <Link
              href=""
              className="px-4 py-1 text-xs font-semibold rounded-lg text-white bg-blue"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden px-5 py-1 flex gap-3 text-white">
        <Link href="/beranda" className="text-xs">
          Beranda
        </Link>
        <Link href="/wisata" className="text-xs">
          Wisata
        </Link>
        <Link href="/penginapan" className="text-xs">
          Penginapan
        </Link>
        <Link href="/pesananSaya" className="text-xs">
          Pesanan Saya
        </Link>
      </div>
    </>
  );
};

export default NavHead;
