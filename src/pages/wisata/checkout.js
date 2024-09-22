import Navbar from "@/components/fragments/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function checkoutPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const router = useRouter();
  const { date } = router.query;

  useEffect(() => {
    if (date) {
      setSelectedDate(new Date(date));
    }
    if (!selectedDate) {
      console.log("anda belum input apa apa");
    }
  }, [date]);

  return (
    <>
      <Navbar />
      {!selectedDate ? (
        <p>eror</p>
      ) : (
        <p>tanggal yang kamu pilih : {selectedDate?.toLocaleDateString()}</p>
      )}
    </>
  );
}
