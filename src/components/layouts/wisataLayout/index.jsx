import Navbar from "@/components/fragments/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const WisataLayout = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("/api/product/wisata/list");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="lg:-mt-28 p-[10px] md:p-[10px] lg:p-[85px] bg-white lg:rounded-t-[120px]">
        <div className="p-1">
          <div className="flex items-end gap-2">
            <img
              src="/assets/icon/event.png"
              alt=""
              className="w-[40px] md:w-[50px]"
            />
            <h1 className="text-sm md:text-lg lg:text-xl font-poppins">
              Pesan Sekarang juga <br />
              Biar Hiling Kamu Makin Gampang
            </h1>
          </div>
        </div>
        <div className="mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:gap-x-20 gap-y-5">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="px-5 py-2 flex items-center justify-between border border-black rounded shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={product.icon_image}
                    alt={product.title}
                    className="w-[35px] md:w-[50px]"
                  />
                  <h1 className="text-xs lg:text-base font-poppins font-medium">
                    {product.title} | {product.category}
                  </h1>
                </div>
                <Link
                  href={`/wisata/${product._id}`}
                  className="px-1.5 md:px-2 py-1 text-xs lg:text-base font-poppins text-white bg-orange rounded-md"
                >
                  Beli Tiket
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WisataLayout;
