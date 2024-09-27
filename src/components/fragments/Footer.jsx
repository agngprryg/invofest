import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" w-full flex flex-wrap justify-between py-10 px-5 md:px-14 lg:px-20 bg-[#1c2931]">
        <div>
          <img
            src="/assets/logoGuci/guci-white.png"
            alt=""
            className="mb-5 w-[105px] md:w-[150px] lg:w-[150px]]"
          />
        </div>
        <div className="grid grid-cols-2 text-white text-sm gap-2 ">
          <p>Tentang</p>
          <p>Tentang</p>
          <p>Tentang</p>
          <p>Tentang</p>
          <p>Tentang</p>
          <p>Tentang</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
