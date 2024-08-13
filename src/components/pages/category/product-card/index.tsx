import React from "react";
import styles from "./style.module.css";

type IProps = {
  title: string;
  price: string;
  image: string;
};

const ProductCard: React.FC<IProps> = ({ title, price, image }) => {
  return (
    <div className={styles.card} title={title}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price}</p>
      </div>
      <div className={styles.tray}>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
