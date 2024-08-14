import styles from "./style.module.css";

const DetailedCheckoutPage = () => {
  return (
    <div className={`${styles.page} container`}>
      <div className={styles.cartSection}>
        <h2>Your Cart</h2>
        <div className={styles.cartTableContainer}>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.productDetails}>
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Product"
                    className={styles.productImage}
                  />
                  <span>ZebraBlend T-Shirt (Orange)</span>
                </td>
                <td>$55.00</td>
                <td>
                  <div className={styles.quantityControls}>
                    <button className={styles.quantityButton}>-</button>
                    <span>2</span>
                    <button className={styles.quantityButton}>+</button>
                  </div>
                </td>
                <td>$110.00</td>
              </tr>
            </tbody>
            <tfoot className={styles.cartTotal}>
              <tr>
                <td colSpan={3} className={styles.cartTotalText}>
                  Total
                </td>
                <td className={styles.cartTotalPrice}>$110.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className={styles.checkoutSection}>
        <h2>Checkout</h2>
        <div className={styles["checkoutForm"]}></div>
      </div>
    </div>
  );
};

export default DetailedCheckoutPage;
