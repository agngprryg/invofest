import DatePicker from "react-datepicker";
import DetailWisataLayout from "../layouts/Transaction";
import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PlusCircle, MinusCircle } from "@phosphor-icons/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

const DetailWisataViews = ({ product }) => {
  const router = useRouter();
  const today = new Date();
  const dayOfWeek = today.getDay();
  const weekend = product.price.weekend;
  const weekday = product.price.weekday;
  const defaultPrice = dayOfWeek === 0 || dayOfWeek === 6 ? weekend : weekday;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayType, setDayType] = useState("");
  const [price, setPrice] = useState(defaultPrice);
  const [count, setCount] = useState(1);
  const totalPrice = price * count;
  const objectProduct = JSON.stringify(product);
  const [formData, setFormData] = useState({
    date: format(selectedDate || new Date(), "yyyy-MM-dd"),
    name: "",
    email: "",
    quantity: count,
    wisata: product.title,
    total_price: totalPrice,
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      date: format(selectedDate || new Date(), "yyyy-MM-dd"),
      quantity: count,
      total_price: totalPrice,
    }));
  }, [selectedDate, count, totalPrice]);

  const dateFormat = (date) => {
    if (date) {
      return format(date, "eeee, dd MMMM yyyy", { locale: id });
    }
    return "Kamu belum inputin tanggal nih";
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      setDayType("weekend");
      setPrice(weekend);
    } else {
      setDayType("weekday");
      setPrice(weekday);
    }
  };

  const handlechekout = () => {
    if (selectedDate) {
      localStorage.setItem(
        "orderDetails",
        JSON.stringify({
          product: objectProduct,
          price: price,
        })
      );

      router.push({
        pathname: `/wisata/checkout/`,
        query: {
          date: selectedDate.toISOString(),
        },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      quantity: count,
      total_price: totalPrice,
    };

    const response = await fetch("/api/transaction/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    });

    const data = await response.json();

    if (data.token) {
      router.push({
        pathname: "/widget/payment",
        query: {
          token: data.token,
        },
      });
    } else {
      alert(data.message);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <DetailWisataLayout>
      <div className="flex flex-wrap justify-between ">
        <div className="w-full lg:w-auto mb-10 lg:mb-0 flex flex-col items-center lg:items-start">
          <h2 className="text-sm font-poppins mb-4">
            cari tanggal yang cocok buat hiling:
          </h2>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            maxDate={addDays(new Date(), 120)}
            inline
            calendarClassName="shadow-xl"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-auto flex lg:flex-col flex-wrap justify-center"
        >
          <div className="grid md:grid-cols-2 gap-5 lg:gap-0 lg:gap-x-20 lg:gap-y-5">
            <div>
              <h1 className="mb-2 text-sm font-semibold font-poppins">
                Tanggal yang kamu pilih:
              </h1>
              <div className="relative w-[350px] h-[35px] md:w-[350px] flex items-center justify-between border border-black rounded-lg">
                <input
                  value={dateFormat(selectedDate)}
                  readOnly
                  className="w-full h-full px-3 py-1 rounded-lg"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/icon/event.png"
                  alt="Event Icon"
                  className="absolute right-6"
                />
              </div>
            </div>
            <div>
              <h1 className="mb-2 text-sm font-semibold font-poppins">
                Wisata yang kamu pilih
                <span className="mx-1 text-orange">*</span>:
              </h1>
              <div className="relative w-[350px] h-[35px] md:w-[350px] flex items-center justify-between border border-black rounded-lg">
                <input
                  type="text"
                  value={formData.wisata}
                  readOnly
                  className="w-full h-full px-3 py-1 rounded-lg"
                />
                <Image
                  width={40}
                  height={40}
                  src="/assets/icon/travel-bag.png"
                  alt="Travel Bag Icon"
                  className="absolute right-6"
                />
              </div>
            </div>
            <div>
              <h1 className="mb-2 text-sm font-semibold font-poppins">
                Siapa Nama Kamu <span className="mx-1 text-orange">*</span>:
              </h1>
              <div className="relative w-[350px] h-[35px] md:w-[350px] flex items-center justify-between border border-black rounded-lg">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-full px-3 py-1 rounded-lg"
                  required
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/icon/id-card.png"
                  alt="ID Card Icon"
                  className="absolute right-6"
                />
              </div>
            </div>
            <div>
              <h1 className="mb-2 text-sm font-semibold font-poppins">
                Masukin Email Kamu <span className="mx-1 text-orange">*</span>:
              </h1>
              <div className="relative w-[350px] h-[35px] md:w-[350px] flex items-center justify-between border border-black rounded-lg">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-full px-3 py-1 rounded-lg"
                  required
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/icon/email.png"
                  alt="Email Icon"
                  className="absolute right-6"
                />
              </div>
              <p className="text-xs font-poppins">
                E-ticketing akan dikirimkan ke email kamu
              </p>
            </div>
            <div>
              <h1 className="mb-2 text-sm font-semibold font-poppins">
                Mau Berapa Orang? <span className="mx-1 text-orange">*</span>:
              </h1>
              <div className="w-[350px] h-[35px] md:w-[350px] px-3 flex justify-between items-center border border-black rounded-lg">
                <p>{count}</p>
                <div className="flex gap-5 items-center">
                  <button onClick={handleIncrement}>
                    <PlusCircle className="w-[20px] h-[20px]" />
                  </button>
                  <button onClick={handleDecrement}>
                    <MinusCircle className="w-[20px] h-[20px]" />
                  </button>
                  <input
                    type="hidden"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 py-4 w-full lg:h-[350px]">
            <h1 className="text-xl font-semibold font-poppins">
              Detail Harga :
            </h1>
            <div className="pb-5 mt-5 border-b border-dashed">
              <div className="flex justify-between">
                <p>Harga Tiket Wisata : </p>
                <p>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(price)}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Jumlah Orang : </p>
                <p>x {count}</p>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <p>Total Harga :</p>
              <p>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(totalPrice)}
              </p>
            </div>
            <button
              type="submit"
              className="w-full h-[40px] lg:h-[50px] mt-5 lg:mt-10 bg-orange text-white font-semibold rounded-lg"
            >
              Lanjut Pembayaran
            </button>
          </div>
        </form>
      </div>

      {/* <p className="mt-4 text-sm">
        Tanggal yang dipilih: {selectedDate?.toLocaleDateString()}
      </p>
      <p>{price}</p>
      <p>{dayType}</p> */}
      {/* <button
        onClick={handlechekout}
        className="mt-5 px-5 py-1 bg-blue rounded-lg text-white font-poppins font-semibold"
      >
        Chekout
      </button> */}
    </DetailWisataLayout>
  );
};

export default DetailWisataViews;
