import React from "react";
import MyordersLayout from "../layouts/MyOrdersLayout";
import { QRCodeSVG } from "qrcode.react";

const MyOrdersView = () => {
  return (
    <MyordersLayout>
      <div className="w-[200px] lg:w-[350px] lg:py-5 flex justify-center rounded-t-[50px] lg:rounded-t-[200px] bg-blue">
        <h1 className="text-xs lg:text-sm font-semibold text-white">
          Basecamp Permadi Guci
        </h1>
      </div>
      <div className="w-[200px] lg:w-[350px] px-5 py-10 flex flex-col items-center justify-center bg-white shadow-xl">
        <div>
          <QRCodeSVG value="orderid" />
        </div>
        <div className="mt-5">
          <button className="px-3 py-1 bg-blue rounded-md text-sm text-white">
            Show QRcode
          </button>
        </div>
      </div>
    </MyordersLayout>
  );
};

export default MyOrdersView;
