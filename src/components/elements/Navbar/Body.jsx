import SearchBar from "../SearchBar";

const Compicons = () => {
  return (
    <div className="mt-5 lg:mt-10 pb-2 lg:pb-5  text-white flex gap-5 border-b border-white">
      <div className="flex items-center gap-1 px-2 lg:px-4 py-1 bg-white text-sm text-black border border-white rounded-2xl hover:border-black transition-all duration-300 ease-in-out">
        <img
          src="/assets/icon/1.png"
          alt="hotels"
          className="w-[20px] lg:w-[30px]"
        />
        <p className="text-sm hidden md:block lg:block">Hotels</p>
      </div>
      <div className="flex items-center gap-1 px-2 lg:px-4 py-1 bg-white text-sm text-black border border-white rounded-2xl hover:border-black transition-all duration-300 ease-in-out">
        <img
          src="/assets/icon/2.png"
          alt="Theme Park"
          className="w-[20px] lg:w-[30px]"
        />
        <p className="text-sm hidden md:block lg:block">Theme Park</p>
      </div>
      <div className="flex items-center gap-1 px-2 lg:px-4 py-1 bg-white text-sm text-black border border-white rounded-2xl hover:border-black transition-all duration-300 ease-in-out">
        <img
          src="/assets/icon/6.png"
          alt="Foods"
          className="w-[20px] lg:w-[30px]"
        />
        <p className="text-sm hidden md:block lg:block">Foods and Drinks</p>
      </div>
      <div className="flex items-center gap-1 px-2 lg:px-4 py-1 bg-white text-sm text-black border border-white rounded-2xl hover:border-black transition-all duration-300 ease-in-out">
        <img
          src="/assets/icon/3.png"
          alt="Villa"
          className="w-[20px] lg:w-[30px]"
        />
        <p className="text-sm hidden md:block lg:block">Villa</p>
      </div>
      <div className="flex items-center gap-1 px-2 lg:px-4 py-1 bg-white text-sm text-black border border-white rounded-2xl hover:border-black transition-all duration-300 ease-in-out">
        <img
          src="/assets/icon/4.png"
          alt="Climbing"
          className="w-[20px] lg:w-[30px]"
        />
        <p className="text-sm hidden md:block lg:block">Climbing</p>
      </div>
      <div className="flex items-center gap-1 px-2 lg:px-4 py-1 bg-white text-sm text-black border border-white rounded-2xl hover:border-black transition-all duration-300 ease-in-out">
        <img
          src="/assets/icon/5.png"
          alt="Camping"
          className="w-[20px] lg:w-[30px]"
        />
        <p className="text-sm hidden md:block lg:block">Camping</p>
      </div>
    </div>
  );
};

const NavBody = () => {
  return (
    <div className="w-full h-full mt-10 lg:mt-20 flex flex-col justify-center items-center text-white ">
      <h1 className="text-sm md:text-lg lg:text-3xl font-bold font-poppins">
        Gausah Kawatir Pesan Tiket Gapake Ribet.
      </h1>
      <Compicons />
      <SearchBar
        width={
          "w-[280px] md:w-[400px] lg:w-[700px]  h-[30px] md:h-[35px] lg:h-[45px]"
        }
      />
      <div className="hidden md:flex lg:flex mt-10 opacity-20">
        <img
          src="/assets/logoGuci/guci-white.png"
          alt="logo guciku"
          className="w-[150px]"
        />
      </div>
    </div>
  );
};

export default NavBody;
