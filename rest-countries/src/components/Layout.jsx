import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <main className={styles.theme}>
      <header className={styles.header}>
        <div className={styles.logo}>Where in the world?</div>
        <ThemeSwitch />
      </header>
      <div className={styles.container}>{props.children}</div>
    </main>
  );
};

export default Layout;
