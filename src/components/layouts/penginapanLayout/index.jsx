import Card from "@/components/elements/CardProduct";
import Navbar from "@/components/fragments/Navbar";
import React from "react";

const PenginapanLayout = () => {
  return (
    <>
      <Navbar />
      <div className="lg:-mt-28 p-[10px] md:p-[50px] lg:p-[85px] bg-white lg:rounded-t-[120px]">
        <div className="px-3 mb-5 lg:mb-3 flex items-end gap-2 ">
          <img
            src="/assets/icon/best-seller.png"
            alt="populer icon"
            className="w-[40px] md:w-[50px]"
          />
          <p className="text-sm md:text-lg lg:text-xl font-poppins font-semibold">
            Jempolan Buat Kamuuu
          </p>
        </div>
        <div>
          <div className="w-screen lg:w-[80%] overflow-x-auto lg:overflow-hidden">
            <Card GetApi={"penginapan/list"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PenginapanLayout;
