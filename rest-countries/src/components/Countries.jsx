import React from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import useFetch from "../common/useFetch";

const Countries = () => {
  useFetch(
    "https://restcountries.com/v2/all"
  );

  return (
    <>
      <SearchBar />
      <List />
    </>
  );
};

export default React.memo(Countries);
