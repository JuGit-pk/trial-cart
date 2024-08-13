import { MAIN_CATEGORIES } from "../../../utils/constants";
import styles from "./style.module.css";

const ShopByCategorySection = () => {
  return (
    <section className={`${styles["shop-by-category-section"]} container`}>
      <h2 className={styles.title}>Shop By Category</h2>
      <div className={styles.cards}>
        {MAIN_CATEGORIES.map((category) => (
          <div key={category.name} className={styles.card}>
            <h3 className={styles["card-name"]}>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategorySection;
