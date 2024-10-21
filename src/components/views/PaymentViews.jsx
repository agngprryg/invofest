import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PaymentLayout from "../layouts/Transaction/PaymentLayout";

const PaymentViews = () => {
  const router = useRouter();
  const { token } = router.query; // Ambil token dari URL
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Memuat Snap.js dan memicu pembayaran jika token tersedia
  useEffect(() => {
    if (token) {
      const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
      const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY_MIDTRANS;

      const script = document.createElement("script");
      script.src = snapScript;
      script.setAttribute("data-client-key", clientKey);
      script.async = true;

      document.body.appendChild(script);

      script.onload = () => {
        if (window.snap) {
          window.snap.embed(token, {
            embedId: "snap-container",
          });
        }
      };
    }
  }, [token]); // useEffect bergantung pada `token`

  return (
    <PaymentLayout>
      <div className="flex justify-center shadow-xl md:rounded-xl lg:rounded-xl">
        <div
          id="snap-container"
          className="w-full md:rounded-xl lg:rounded-xl"
        />
      </div>
    </PaymentLayout>
  );
};

export default PaymentViews;
