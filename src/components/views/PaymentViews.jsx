import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PaymentLayout from "../layouts/Transaction/PaymentLayout";

const PaymentViews = () => {
  const router = useRouter();
  const { token } = router.query; // Get the token from the URL query params
  const [savedToken, setSavedToken] = useState(null); // State to save the token

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY_MIDTRANS;

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      if (window.snap && token) {
        setSavedToken(token); // Save the token for future use
        triggerSnapPayment(token); // Call the function to open Snap payment
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [token]);

  // Function to trigger the Snap payment
  const triggerSnapPayment = (paymentToken) => {
    window.snap.pay(paymentToken, {
      onSuccess: function (result) {
        console.log("Payment success", result);
        router.push("/success");
      },
      onPending: function (result) {
        console.log("Payment pending", result);
      },
      onError: function (result) {
        console.error("Payment error", result);
      },
    });
  };

  const reopenPayment = () => {
    if (savedToken) {
      triggerSnapPayment(savedToken);
    }
  };

  return (
    <PaymentLayout>
      <button onClick={reopenPayment}>Reopen Payment</button>
    </PaymentLayout>
  );
};

export default PaymentViews;
