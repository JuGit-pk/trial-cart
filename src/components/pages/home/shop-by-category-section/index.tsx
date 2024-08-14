import { Link } from "react-router-dom";

import styles from "./style.module.css";
import { useProductCategories } from "../../../../hooks/query/useProductCategories";

const ShopByCategorySection = () => {
  const { data } = useProductCategories();
  return (
    <section className={`${styles["shop-by-category-section"]} container`}>
      <h2 className={styles.title}>Shop By Category</h2>
      <div className={styles.cards}>
        {data?.map((category) => (
          <Link
            key={category}
            className={styles.card}
            title={category}
            to={`category/${category}`}
          >
            <h3 className={styles["card-name"]}>{category}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategorySection;
