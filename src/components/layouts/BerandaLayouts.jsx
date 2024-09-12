import React from "react";
import Navbar from "../fragments/Navbar";
import Link from "next/link";

const BerandaLayouts = () => {
  const images = ["/assets/events/1.png", "/assets/events/2.jpg"];

  return (
    <>
      <Navbar />
      <div className="lg:-mt-28 p-[10px] md:p-[100px] lg:p-[120px] bg-white shadow-xl lg:rounded-t-[120px]">
        <div className="w-screen lg:w-full px-3 py-5 lg:py-10 flex gap-5 bg-blue text-white rounded-xl relative">
          <div className="flex flex-col justify-center  w-[100%] md:20% lg:w-[20%]">
            <h1 className="text-sm md:text-base lg:text-xl ">
              Paling Cocok Buat Kamu
            </h1>
            <p className="lg:my-2 text-xs">Diskon Sampai Dengan </p>
            <p className="lg:text-4xl font-extrabold">50%</p>
            <Link
              href=""
              className="mt-3 lg:mt-5 text-xs font-light hover:underline"
            >
              Lihat Sekarang
            </Link>
          </div>
          <div className="overflow-x-auto lg:overflow-hidden w-screen md:w-[80%] lg:w-[80%] ">
            <div className=" min-w-[1200px] lg:min-w-0 flex space-x-4 z-20">
              <div className="relative w-[250px] md:w-[300px] lg:w-[350px] rounded-lg">
                <img
                  src="/assets/wisata/bukit-bintang/1.jpg"
                  alt=""
                  className="w-full h-full rounded-lg"
                />
                <p className="absolute px-5 py-1 bg-blue rounded-lg text-white text-sm font-semibold top-0">
                  10 m
                </p>
              </div>
              <div className="relative w-[250px] md:w-[300px] lg:w-[350px] rounded-lg">
                <img
                  src="/assets/wisata/golden-park/1.jpg"
                  alt=""
                  className="w-full h-full rounded-lg"
                />
                <p className="absolute px-5 py-1 bg-blue rounded-lg text-white text-sm font-semibold top-0">
                  10 m
                </p>
              </div>
              <div className="relative w-[250px] md:w-[300px] lg:w-[350px] rounded-lg">
                <img
                  src="/assets/wisata/permadi-guci/1.jpg"
                  alt=""
                  className="w-full h-full rounded-lg"
                />
                <p className="absolute px-5 py-1 bg-blue rounded-lg text-white text-sm font-semibold top-0">
                  10 m
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BerandaLayouts;
