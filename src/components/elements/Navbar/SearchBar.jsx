import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = ({ width }) => {
  const [index, setIndex] = useState(0);
  const placeholder = [
    "Cari Hotel Guciku",
    "Cari Wisata Permadi",
    "Cari Resort Villa",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % placeholder.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`relative mt-3 md:mt-8 lg:mt-10 border border-white  ${width} rounded-2xl`}
    >
      <input
        type="text"
        className="w-full h-full px-4 text-black rounded-2xl placeholder:text-xs placeholder:md:text-sm placeholder:lg:text-base transition-all "
        placeholder={placeholder[index]}
      />
      <button className="absolute right-0 px-4 h-full bg-orange rounded-r-2xl">
        <MagnifyingGlass color="white" className="w-3 lg:w-6 h-3 lg:h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
