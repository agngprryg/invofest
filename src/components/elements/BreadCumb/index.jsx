import { Circle } from "@phosphor-icons/react";

const BreadCumb = ({ route, path }) => {
  return (
    <div className="flex gap-3 lg:gap-5">
      <p
        className={`text-xs ${route.includes("/widget") ? "text-orange" : ""}`}
      >
        Detail pesanan
      </p>
      <Circle weight="fill" width={5} />
      <p
        className={`text-xs ${route.includes("/payment") ? "text-orange" : ""}`}
      >
        Selesaikan pembayaran
      </p>
      <Circle weight="fill" width={5} />
      <p
        className={`text-xs ${path === "/widget/success" ? "text-orange" : ""}`}
      >
        Pesanan berhasil
      </p>
    </div>
  );
};

export default BreadCumb;
