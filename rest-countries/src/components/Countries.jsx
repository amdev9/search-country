import React from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import RegionFilter from "./RegionFilter";
import ThemeSwitch from "./ThemeSwitch";
import useFetch from "../common/useFetch";

const Countries = () => {
  useFetch(
    "https://restcountries.com/v2/all"
  );

  return (
    <>
      <SearchBar />
      <RegionFilter />
      <ThemeSwitch />
      <List />
    </>
  );
};

export default React.memo(Countries);
