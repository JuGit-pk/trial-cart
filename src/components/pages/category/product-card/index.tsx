import React from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../../../types";
import { useCartCtx } from "../../../../hooks/context/useCartCtx";
import styles from "./style.module.css";

type IProps = {
  product: IProduct;
};

const ProductCard: React.FC<IProps> = ({ product }) => {
  const { addItem } = useCartCtx();
  const { id, title, price, image, rating } = product;

  // Function to display star ratings with the review count
  const renderRating = (ratings: number) => {
    const stars = [];
    for (let i = 0; i < ratings; i++) {
      stars.push(
        <span key={i}>&#9733;</span> // Unicode star character
      );
    }
    return (
      <div className={styles.rating}>
        {stars}
        <span className={styles.ratingCount}>
          {/* {rating.count > 0 ? `${rating.count} reviews` : "No reviews"} */}
        </span>
      </div>
    );
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <div className={styles.card} title={title}>
      <Link to={`/category/${product.category}/${id}`}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          {renderRating(rating.rate)}
          <p className={styles.price}>${price.toFixed(2)}</p>
        </div>
        <div className={styles.tray}>
          <button className={styles.button} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
