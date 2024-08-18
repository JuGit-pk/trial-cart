import React, { useState, FormEvent } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import styles from "./style.module.css"; // Import CSS module

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message || "An error occurred.");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className={styles.form}>
      <PaymentElement id="payment-element" className={styles.paymentElement} />
      <button
        type="submit"
        disabled={isProcessing || !stripe || !elements}
        className={styles.button}
      >
        <span>{isProcessing ? "Processing ... " : "Pay now"}</span>
      </button>
      {message && (
        <div id="payment-message" className={styles.message}>
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
