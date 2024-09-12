import React from "react";

const NavBg = () => {
  return (
    <div>
      <img
        src="/assets/bg/bg.jpg"
        alt=""
        className="-z-40 absolute w-full h-[270px] md:h-[400px] lg:h-[600px]"
      />
      <div className="-z-30 relative w-full h-[270px] md:h-[400px] lg:h-[600px] bg-black opacity-30"></div>
    </div>
  );
};

export default NavBg;
