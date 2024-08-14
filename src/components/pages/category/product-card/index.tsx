import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

type IProps = {
  id: number;
  title: string;
  price: string;
  image: string;
};

const ProductCard: React.FC<IProps> = ({ title, price, image, id }) => {
  return (
    <Link to={`/product/${id}`}>
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
    </Link>
  );
};

export default ProductCard;
