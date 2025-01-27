import Footer from "@/components/fragments/Footer";
import Navbar from "@/components/fragments/Navbar";
import React from "react";

const PenginapanLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="lg:-mt-28 p-[10px] md:p-[50px] lg:p-[85px] bg-white lg:rounded-t-[120px]">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default PenginapanLayout;
