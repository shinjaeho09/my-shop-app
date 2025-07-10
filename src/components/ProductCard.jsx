import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()}원</p>
      </Link>
    </div>
  );
}

export default ProductCard;
