import React from "react";
// import ThemeSwitch from "./ThemeSwitch";
import { Link } from "react-router-dom"
import styles from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <main className={styles.theme}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to={`/`}>Where in the world?</Link>
        </div>
        {/* <ThemeSwitch /> */}
      </header>
      <div className={styles.container}>{props.children}</div>
    </main>
  );
};

export default Layout;
