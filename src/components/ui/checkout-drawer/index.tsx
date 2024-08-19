import { Drawer } from "vaul";
import { Link } from "react-router-dom";

import Icons from "../../icons";
import styles from "./styles.module.css";
import { useCartCtx } from "../../../hooks/context/useCartCtx";

export function CheckoutDrawer() {
  const {
    items: cartItems,
    total,
    decrementItem,
    incrementItem,
    removeItem,
  } = useCartCtx();

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <button className={styles.trigger}>
          <Icons.cart />
          {cartItems.length > 0 && (
            <span className={styles.cartBadge}>
              {cartItems.reduce((a, b) => a + b.quantity, 0)}
            </span>
          )}
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
            {cartItems.length > 0 ? (
              <div className={styles.cartItems}>
                {cartItems.map((item) => (
                  <div className={styles.cartItem}>
                    <div className={styles.cartItemImageContainer}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.cartItemImage}
                      />
                      <button
                        className={styles.deleteButton}
                        onClick={() => removeItem(item.id)}
                      >
                        delete
                      </button>
                    </div>
                    <div className={styles.cartItemDetails}>
                      <span className={styles.cartItemName}>{item.title}</span>
                      <span
                        className={styles.cartItemPrice}
                      >{`$ ${item.price}`}</span>
                    </div>
                    <div className={styles.cartItemQuantity}>
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
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyCart}>
                <Icons.cart width={160} height={160} />
                <p>Your cart is empty</p>
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className={styles.footer}>
              <div className={styles.totalPrice}>{`Total: $${total}`}</div>
              <Link to="/checkout" className={styles.checkoutButton}>
                Proceed to Checkout
              </Link>
            </div>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
