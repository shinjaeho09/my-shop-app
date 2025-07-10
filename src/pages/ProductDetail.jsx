import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <h2>{product.name}</h2>
        <p>{product.price.toLocaleString()}원</p>
        <button onClick={handleAddToCart}>장바구니에 담기</button>
      </div>
      {showToast && <div className={styles.toast}>장바구니에 담겼습니다!</div>}
    </div>
  );
}

export default ProductDetail;
