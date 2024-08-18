import { useNavigate, useParams } from "react-router-dom";
import { useGetProductsByCategories } from "../../../../hooks/query/useGetProductsByCategories";
import ProductCard from "../product-card";
import styles from "./style.module.css";
import Icons from "../../../icons";

const CategoryContentArea = () => {
  const navigate = useNavigate();
  const { categorySlug: category } = useParams();
  const { data } = useGetProductsByCategories({ category: category! });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;
    console.log(`Selected filter: ${filterValue}`);
  };

  return (
    <section className={styles["content-area"]}>
      <div className={styles.header}>
        <button
          onClick={() => navigate(-1)}
          className={styles.backButton}
          title="Go back"
        >
          <Icons.backChevron />
        </button>
        <div className={styles.rightHeader}>
          <div className={styles["total-results"]}>
            Total Results: {data?.length || 0}
          </div>
          <select
            className={styles.filterDropdown}
            onChange={handleFilterChange}
            title="Sort by"
            defaultValue="default"
          >
            <option value="default" hidden>
              Sort by
            </option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating_asc">Rating: Low to High</option>
            <option value="rating_desc">Rating: High to Low</option>
          </select>
        </div>
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
