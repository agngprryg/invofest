import BerandaLayouts from "../layouts/Beranda";
import Link from "next/link";
import Card from "@/components/elements/CardProduct";

const BerandaViews = () => {
  return (
    <BerandaLayouts>
      <div className="lg:-mt-28 p-[10px] md:p-[50px] lg:p-[85px] bg-white lg:rounded-t-[120px]">
        <div className="px-3 py-5 lg:py-10 flex gap-5 bg-blue lg:bg-white rounded-xl ">
          <div className="lg:-mr-12 lg:mt-10 w-screen lg:w-[80%] overflow-x-auto lg:overflow-hidden z-20">
            <Card GetApi={"penginapan/populer"} align={"justify-end"} />
          </div>
          <div className="w-[100%] pr-10 lg:w-[20%] lg:pr-10 lg:pl-10 lg:py-20 flex flex-col justify-center lg:bg-blue rounded-xl z-10">
            <h1 className="text-sm md:text-lg text-white">
              Hotel yang paling dicari
            </h1>
            <p className="lg:my-2 text-xs text-white">Diskon Sampai Dengan </p>
            <p className="text-2xl md:text-2xl lg:text-4xl font-extrabold text-white">
              50%
            </p>
            <Link
              href=""
              className="w-[110px] px-2 py-1.5 mt-5 bg-white text-blue text-xs font-semibold rounded-lg"
            >
              Lihat Sekarang
            </Link>
          </div>
        </div>
        {/* <div className="mt-10 lg:-mt-20 px-3 py-5 lg:py-10 flex gap-5 bg-orange lg:bg-white rounded-xl">
          <div className="w-[100%] pr-10 lg:w-[20%] lg:pr-10 lg:pl-10 lg:py-20 flex flex-col justify-center lg:bg-orange rounded-xl z-10 ">
            <h1 className="text-sm md:text-lg text-white">
              Hotel yang paling dicari
            </h1>
            <p className="lg:my-2 text-xs text-white">Diskon Sampai Dengan </p>
            <p className="text-2xl md:text-2xl lg:text-4xl font-extrabold text-white">
              50%
            </p>
            <Link
              href=""
              className="w-[110px] px-2 py-1.5 mt-5 bg-white text-blue text-xs font-semibold rounded-lg"
            >
              Lihat Sekarang
            </Link>
          </div>
          <div className="lg:-ml-12 lg:mt-10 w-screen lg:w-[80%] overflow-x-auto lg:overflow-hidden z-20">
            <Card GetApi={"wisata/populer"} />
          </div>
        </div> */}
      </div>
    </BerandaLayouts>
  );
};

export default BerandaViews;
