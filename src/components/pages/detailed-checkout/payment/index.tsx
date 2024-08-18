import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../checkout-form";
import { useCartCtx } from "../../../../hooks/context/useCartCtx";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
export default function Payment() {
  const { total } = useCartCtx();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const createPaymentIntent = async () => {
      const response = await fetch(
        "https://api.stripe.com/v1/payment_intents",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRIPE_SK}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            amount: `${total * 100}`,
            currency: "usd",
            // payment_method_types: JSON.stringify([""]),
          }),
        }
      );

      const paymentIntent = await response.json();
      console.log(paymentIntent);
      setClientSecret(paymentIntent.client_secret);
    };

    createPaymentIntent();
  }, []);

  const options = {
    clientSecret,
  };
  console.log({ clientSecret });

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
