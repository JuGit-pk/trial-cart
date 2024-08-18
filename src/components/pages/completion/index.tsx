import React from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

const CompletionPage: React.FC = () => {
  return (
    <div className={`${styles.page} container`}>
      <h1 className={styles.title}>Payment Successful</h1>
      <p className={styles.message}>
        Thank you for your purchase! Your payment has been processed
        successfully.
      </p>
      <Link to="/" className={styles.homeLink}>
        Return to Home
      </Link>
    </div>
  );
};

export default CompletionPage;
