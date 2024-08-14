import Icons from "../../icons";
import styles from "./style.module.css";

const PRODUCT = {
  id: 1,
  title: "Wireless Headphones",
  price: "99.99",
  category: "Electronics",
  description: "High-quality wireless headphones with noise cancellation.",
  image: "https://via.placeholder.com/600?text=Wireless+Headphones",
};

const ProductPage = () => {
  return (
    <div className={`${styles.page} container`}>
      <button className={styles.backButton} title="Go back">
        <Icons.backChevron />
      </button>
      <div className={styles.content}>
        <figure className={styles.imageContainer}>
          <img
            src={PRODUCT.image}
            alt={PRODUCT.title}
            className={styles.largeImage}
          />
        </figure>
        <div className={styles.details}>
          <h1 className={styles.title}>{PRODUCT.title}</h1>
          <p className={styles.category}>{PRODUCT.category}</p>
          <p className={styles.description}>{PRODUCT.description}</p>
          <p className={styles.price}>${PRODUCT.price}</p>
          <div className={styles.actions}>
            <button className={styles.checkoutButton} title="Checkout now">
              Checkout
            </button>
            <button className={styles.favoriteButton} title="Favourite it">
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
