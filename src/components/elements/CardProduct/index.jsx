import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Card = ({ GetApi, align }) => {
  const [isProducts, setIsProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`/api/product/${GetApi}`);
        const data = await response.json();

        const mappedProducts = data.map((product) => ({
          ...product,
          discountedPrice: product.price * 0.5,
        }));

        setIsProduct(mappedProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [GetApi]);

  return (
    <div className={`lg:p-3 min-w-[500px] lg:min-w-0 flex ${align} space-x-4`}>
      {isProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="w-[150px] md:w-[200px] lg:w-[250px] rounded-lg border black bg-white lg:hover:scale-105 duration-200 transition-all ease-in-out"
          >
            <Image
              width={200}
              height={200}
              src={product.single_image}
              alt={product.title}
              className="w-full h-[50%] object-contain rounded-t-lg"
            />
            <div className="p-2 lg:p-3 bg-white rounded-b-lg">
              <p className="text-xs lg:text-sm font-semibold">
                {product.title}
              </p>
              <div className="my-1 lg:pt-2 lg:pb-5 flex items-center gap-1">
                <Star size={12} weight="fill" color="orange" />
                <Star size={12} weight="fill" color="orange" />
                <Star size={12} weight="fill" color="orange" />
                <Star size={12} weight="fill" color="orange" />
                <Star size={12} weight="fill" color="orange" />
              </div>
              <div className="">
                <p className="text-xs lg:text-sm line-through font-light">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <p className="text-xs lg:text-sm font-semibold">
                  {product.discountedPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
