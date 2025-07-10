import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";  
import styles from "./Header.module.css";

function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>쇼핑몰</div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>홈</Link>
          <Link to="/cart" className={styles.link}>Cart</Link>
        </nav>
      </header>
    );
  }

export default Header;
