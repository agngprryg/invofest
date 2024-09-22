import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { useRouter } from "next/router";

export default function CustomDatePicker({ products }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const router = useRouter();

  const handlechekout = () => {
    if (selectedDate) {
      router.push({
        pathname: "/wisata/checkout",
        query: { date: selectedDate.toISOString() },
      });
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center p-6 bg-white shadow rounded-lg">
        <h2 className="text-lg font-medium mb-4">
          Pilih Tanggal Terlebih Dahulu Ya Sob:
        </h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          maxDate={addDays(new Date(), 120)}
          inline
          calendarClassName="shadow-xl"
        />

        <p className="mt-4 text-sm">
          Tanggal yang dipilih: {selectedDate?.toLocaleDateString()}
        </p>
        <button
          onClick={handlechekout}
          className="mt-5 px-5 py-1 bg-blue rounded-lg text-white font-poppins font-semibold"
        >
          Chekout
        </button>
      </div>
    </>
  );
}
