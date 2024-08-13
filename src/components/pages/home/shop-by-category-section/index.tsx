import styles from "./style.module.css";
import { MAIN_CATEGORIES } from "../../../../utils/constants";

const ShopByCategorySection = () => {
  return (
    <section className={`${styles["shop-by-category-section"]} container`}>
      <h2 className={styles.title}>Shop By Category</h2>
      <div className={styles.cards}>
        {MAIN_CATEGORIES.map((category) => (
          <a
            key={category.name}
            className={styles.card}
            title={category.name}
            href="#"
          >
            <h3 className={styles["card-name"]}>{category.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategorySection;
