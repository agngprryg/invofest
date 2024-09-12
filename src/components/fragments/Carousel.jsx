// components/Carousel.js
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative lg:w-[500px] mx-auto flex justify-center items-center shadow-xl">
      <div className="w-full lg:h-[250px] flex justify-center ">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Left caret */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white rounded-full hover:bg-gray-600"
      >
        <CaretLeft size={32} color="black" />
      </button>

      {/* Right caret */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white rounded-full hover:bg-gray-600"
      >
        <CaretRight size={32} color="black" />
      </button>
    </div>
  );
};

export default Carousel;
