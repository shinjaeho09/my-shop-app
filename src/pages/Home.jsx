import React from "react";
import products from "../data/products"; // 상품 데이터 불러오기
import ProductCard from "../components/ProductCard";
import styles from "./Home.module.css";

function Home() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>상품 목록</h1>
        <div className={styles.productList}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }

export default Home;
