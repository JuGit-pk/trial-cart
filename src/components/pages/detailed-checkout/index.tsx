import { useCartCtx } from "../../../hooks/context/useCartCtx";
import Payment from "./payment";
import styles from "./style.module.css";

const DetailedCheckoutPage = () => {
  const { items, total, decrementItem, incrementItem } = useCartCtx();

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
              {items.map((item) => (
                <tr>
                  <td className={styles.productDetails}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.productImage}
                    />
                    <span>{item.title}</span>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.quantityButton}
                        onClick={() => decrementItem(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className={styles.quantityButton}
                        onClick={() => incrementItem(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className={styles.cartTotal}>
              <tr>
                <td colSpan={3} className={styles.cartTotalText}>
                  Total
                </td>
                <td className={styles.cartTotalPrice}>${total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {items.length > 0 && (
        <div className={styles.checkoutSection}>
          <h2>Checkout</h2>
          <Payment />
        </div>
      )}
    </div>
  );
};

export default DetailedCheckoutPage;
