import ProductCard from "../product-card";
import styles from "./style.module.css";
const PRODUCTS = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: "99.99",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://via.placeholder.com/300?text=Wireless+Headphones",
  },
  {
    id: 2,
    title: "Smartphone",
    price: "699.99",
    category: "Electronics",
    description: "Latest model smartphone with all the features you need.",
    image: "https://via.placeholder.com/300?text=Smartphone",
  },
  {
    id: 3,
    title: "Gaming Console",
    price: "499.99",
    category: "Gaming",
    description: "Next-gen gaming console with stunning graphics.",
    image: "https://via.placeholder.com/300?text=Gaming+Console",
  },
  {
    id: 4,
    title: "Smartwatch",
    price: "199.99",
    category: "Wearables",
    description: "Stylish smartwatch with fitness tracking features.",
    image: "https://via.placeholder.com/300?text=Smartwatch",
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    price: "79.99",
    category: "Audio",
    description: "Portable Bluetooth speaker with rich sound quality.",
    image: "https://via.placeholder.com/300?text=Bluetooth+Speaker",
  },
  {
    id: 6,
    title: "Laptop",
    price: "1099.99",
    category: "Computers",
    description: "High-performance laptop for work and gaming.",
    image: "https://via.placeholder.com/300?text=Laptop",
  },
  {
    id: 7,
    title: "4K TV",
    price: "899.99",
    category: "Home Entertainment",
    description: "Ultra HD 4K TV with HDR support.",
    image: "https://via.placeholder.com/300?text=4K+TV",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    price: "49.99",
    category: "Wearables",
    description: "Affordable fitness tracker with heart rate monitor.",
    image: "https://via.placeholder.com/300?text=Fitness+Tracker",
  },
  {
    id: 9,
    title: "Digital Camera",
    price: "599.99",
    category: "Photography",
    description: "Professional digital camera with 4K video recording.",
    image: "https://via.placeholder.com/300?text=Digital+Camera",
  },
  {
    id: 10,
    title: "Tablet",
    price: "329.99",
    category: "Tablets",
    description: "Lightweight tablet with a high-resolution display.",
    image: "https://via.placeholder.com/300?text=Tablet",
  },
];

const CategoryContentArea = () => {
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
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryContentArea;
