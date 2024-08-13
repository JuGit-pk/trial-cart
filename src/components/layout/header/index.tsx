import Icons from "../../icons";
import styles from "./style.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.content}`}>
        <p className={styles.logo}>Trial Mart</p>
        <nav className={styles.nav}>
          <a title="Favourites" href="#">
            <Icons.heart />
          </a>
          <a title="Cart" href="#">
            <Icons.cart />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
