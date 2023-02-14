import React from "react";
import { LogoWithName } from "../../icons";
import styles from "../../styles/header/main.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <LogoWithName className={styles.logo} />
      </Link>
      <Link to="/docs">
        <span>Docs</span>
      </Link>
    </header>
  );
};

export default Header;
