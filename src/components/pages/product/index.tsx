import { useNavigate, useParams } from "react-router-dom";

import Icons from "../../icons";
import styles from "./style.module.css";
import { useSingleProductCategories } from "../../../hooks/query/useSingleProductDetails";

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data } = useSingleProductCategories({ productId: Number(productId) });

  return (
    <div className={`${styles.page} container`}>
      <button
        onClick={() => navigate(-1)}
        className={styles.backButton}
        title="Go back"
      >
        <Icons.backChevron />
      </button>
      <div className={styles.content}>
        <figure className={styles.imageContainer}>
          <img
            src={data?.image}
            alt={data?.title}
            className={styles.largeImage}
          />
        </figure>
        <div className={styles.details}>
          <h1 className={styles.title}>{data?.title}</h1>
          <p className={styles.category}>{data?.category}</p>
          <p className={styles.description}>{data?.description}</p>
          <p className={styles.price}>${data?.price}</p>
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
