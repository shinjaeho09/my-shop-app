import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cartItems, removeFromCart, increase, decrease } = useContext(CartContext);


  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p>장바구니가 비어 있습니다.</p>;
  }

  return (
    <div className={styles.container}>
      <h2>장바구니</h2>
      <ul className={styles.list}>
        {cartItems.map(item => (
          <li key={item.id} className={styles.item}>
            <span>{item.name}</span>
            <span>{item.price.toLocaleString()}원</span>
            <div className={styles.quantity}>
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
            <button className={styles.remove} onClick={() => removeFromCart(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <h3>총 가격: {totalPrice.toLocaleString()}원</h3>
    </div>
  );
}

export default Cart;
