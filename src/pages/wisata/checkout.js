import Navbar from "@/components/fragments/Navbar";
import CheckoutLayout from "@/components/layouts/DetailWisata/Checkout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function checkoutPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);
  const { date, order, price } = router.query;
  const [isOrder, setOrder] = useState();

  useEffect(() => {
    if (date) {
      setSelectedDate(new Date(date));
    }
    if (!selectedDate) {
      console.log("anda belum input apa apa");
    }
  }, [date]);

  useEffect(() => {
    if (order) {
      const parsedOrder = JSON.parse(decodeURIComponent(order));
      setOrder(parsedOrder);
    }
  }, [order]);

  return (
    <>
      <Navbar />
      <CheckoutLayout selectDate={selectedDate} order={isOrder} price={price} />
    </>
  );
}
