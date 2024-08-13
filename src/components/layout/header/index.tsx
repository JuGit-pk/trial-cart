import Icons from "../../icons";
import styles from "./style.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.content}`}>
        <p className={styles.logo}>Trial Cart</p>
        <nav className={styles.nav}>
          <a className={styles["nav-item"]} title="Favourites" href="#">
            <Icons.heart />
          </a>
          <a className={styles["nav-item"]} title="Cart" href="#">
            <Icons.cart />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
