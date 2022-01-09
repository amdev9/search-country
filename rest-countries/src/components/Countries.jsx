import React from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import RegionFilter from "./RegionFilter";
import useFetch from "../common/useFetch";

const Countries = () => {
  useFetch(
    "https://restcountries.com/v2/all"
  );

  return (
    <>
      <SearchBar />
      <RegionFilter />
      <List />
    </>
  );
};

export default React.memo(Countries);
