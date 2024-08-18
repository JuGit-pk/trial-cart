import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { CheckoutDrawer } from "../../ui/checkout-drawer";
import { useCartCtx } from "../../../hooks/context/useCartCtx";

const Header = () => {
  const { items } = useCartCtx();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`) as HTMLElement;
      if (window.scrollY > 0) {
        header.classList.add(styles.blurred);
      } else {
        header.classList.remove(styles.blurred);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.content}`}>
        <Link to="/">
          <p className={styles.logo}>Trial Cart</p>
        </Link>
        <nav className={styles.nav}>
          <div className={styles["nav-item"]} title="Cart">
            <CheckoutDrawer />
            {items.length > 0 && (
              <span className={styles.cartBadge}>{items.length}</span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
