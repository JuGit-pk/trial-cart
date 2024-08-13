import CategoryContentArea from "./content-area";
// import CategorySidebar from "./sidebar";
import styles from "./style.module.css";

const CategoryPage = () => {
  return (
    <section className={`container ${styles["category-page"]}`}>
      {/* <CategorySidebar /> */}
      <CategoryContentArea />
    </section>
  );
};

export default CategoryPage;
