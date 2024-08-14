import { Drawer } from "vaul";
import Icons from "../../icons";
import styles from "./styles.module.css";

export function CheckoutDrawer() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <button className={styles.trigger}>
          <Icons.cart />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content className={styles.content}>
          <div className={styles.innerContent}>
            <div className={styles.header}>
              <Drawer.Title className={styles.title}>Review Cart</Drawer.Title>
              <Drawer.Close className={styles.close}>
                <Icons.x />
              </Drawer.Close>
            </div>
            <div className={styles.cartItems}>
              {/* Add your cart items here */}
              <div className={styles.cartItem}>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Item 1"
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <span className={styles.cartItemName}>Item 1</span>
                  <span className={styles.cartItemPrice}>$30</span>
                </div>
                <div className={styles.cartItemQuantity}>
                  <button className={styles.quantityButton}>-</button>
                  <span>1</span>
                  <button className={styles.quantityButton}>+</button>
                </div>
              </div>
              <div className={styles.cartItem}>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Item 2"
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <span className={styles.cartItemName}>Item 2</span>
                  <span className={styles.cartItemPrice}>$40</span>
                </div>
                <div className={styles.cartItemQuantity}>
                  <button className={styles.quantityButton}>-</button>
                  <span>1</span>
                  <button className={styles.quantityButton}>+</button>
                </div>
              </div>
              <div className={styles.cartItem}>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Item 3"
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <span className={styles.cartItemName}>Item 3</span>
                  <span className={styles.cartItemPrice}>$30</span>
                </div>
                <div className={styles.cartItemQuantity}>
                  <button className={styles.quantityButton}>-</button>
                  <span>1</span>
                  <button className={styles.quantityButton}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.totalPrice}>Total: $100</div>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
