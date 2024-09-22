import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { SignOut } from "@phosphor-icons/react";

const NavHead = () => {
  const { data: session, status } = useSession();

  // Jika session masih loading
  if (status === "loading") {
    return <p className="hidden">Loading...</p>;
  }

  return (
    <>
      <div className="px-5 lg:px-10 py-3 flex items-center justify-between">
        <img
          src="/assets/logoGuci/guci-white.png"
          alt="Logo Guci"
          className="w-[105px] md:w-[150px] lg:w-[150px] -mt-3"
        />
        <div className="flex items-center gap-28">
          <div className="hidden md:hidden lg:flex gap-10 items-center text-white">
            <Link
              href="/"
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

          {/* Menampilkan tombol "Masuk" dan "Daftar" jika belum login */}
          {status === "unauthenticated" ? (
            <div className="flex gap-2">
              <Link
                href="/auth/signin"
                className="px-4 py-1 text-xs font-semibold rounded-lg text-white border "
              >
                Masuk
              </Link>
              <Link
                href="/api/auth/signup"
                className="px-4 py-1 text-xs font-semibold rounded-lg text-white bg-blue"
              >
                Daftar
              </Link>
            </div>
          ) : (
            <div className="flex gap-5">
              <p className="text-white text-sm lg:text-base">
                Halo, {session.user.name}
              </p>
              <div className="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-lg text-white border">
                <SignOut />
                <button onClick={() => signOut()}>Keluar</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="lg:hidden px-5 py-1 flex gap-3 text-white">
        <Link href="/" className="text-xs">
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
