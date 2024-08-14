import { useNavigate, useParams } from "react-router-dom";

import Icons from "../../icons";
import { useSingleProductCategories } from "../../../hooks/query/useSingleProductDetails";
import styles from "./style.module.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data } = useSingleProductCategories({ productId: Number(productId) });

  if (!data) return <div>Loading...</div>;

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => {
      return index < rating ? (
        <Icons.starEmpty key={index} className={styles.starFillIcon} />
      ) : (
        <Icons.starEmpty key={index} className={styles.starEmptyIcon} />
      );
    });
  };

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
            src={data.image}
            alt={data.title}
            className={styles.largeImage}
          />
        </figure>
        <div className={styles.details}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.category}>{data.category}</p>
          <div className={styles.rating} title={`Rating: ${data.rating.rate}`}>
            {renderStars(Math.round(data.rating.rate))}
            <span className={styles.reviewCount}>{data.rating.rate}</span>
            <span className={styles.reviewCount}>
              ({data.rating.count} reviews)
            </span>
          </div>
          <p className={styles.price}>${data.price}</p>
          <button className={styles.addToCartButton} title="Add to Cart">
            Add to Cart
          </button>
          <p className={styles.description}>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
