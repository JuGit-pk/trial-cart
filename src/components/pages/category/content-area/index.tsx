import { useParams } from "react-router-dom";
import { useGetProductsByCategories } from "../../../../hooks/query/useGetProductsByCategories";
import ProductCard from "../product-card";
import styles from "./style.module.css";

const CategoryContentArea = () => {
  const { categorySlug: category } = useParams();
  const { data } = useGetProductsByCategories({ category: category! });
  console.log(data);
  return (
    <section className={styles["content-area"]}>
      <div className={styles.header}>
        <div className={styles["total-results"]}>Total Results</div>
        <div className={styles["sort-by"]}>Sort by:</div>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search"
          className={styles["search-input"]}
        />
      </div>
      {/* product list */}
      <div className={styles.cards}>
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryContentArea;
