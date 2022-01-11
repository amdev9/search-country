import React from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import RegionFilter from "./RegionFilter";
import useFetch from "../common/useFetch";
import Layout from "./Layout";
import styles from "./Countries.module.scss";

const Countries = () => {
  useFetch("https://restcountries.com/v2/all");

  return (
    <Layout>
      <div className={styles.conditions}>
        <SearchBar />
        <RegionFilter />
      </div>
      <List />
    </Layout>
  );
};

export default React.memo(Countries);
