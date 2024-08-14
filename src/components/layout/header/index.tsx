import { useEffect } from "react";
import { Link } from "react-router-dom";

// import Icons from "../../icons";
import styles from "./style.module.css";
import { CheckoutDrawer } from "../../ui/checkout-drawer";

const Header = () => {
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
          {/* <span className={styles["nav-item"]} title="Favourites">
            <Icons.heart />
          </span> */}
          <span className={styles["nav-item"]} title="Cart">
            <CheckoutDrawer />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
