import React from "react";
import PenginapanLayout from "../layouts/Penginapan";
import Card from "../elements/CardProduct";

const PenginapanViews = () => {
  return (
    <PenginapanLayout>
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
      <div className="w-screen lg:w-[80%] overflow-x-auto lg:overflow-hidden">
        <Card GetApi={"penginapan/list"} />
      </div>
    </PenginapanLayout>
  );
};

export default PenginapanViews;
