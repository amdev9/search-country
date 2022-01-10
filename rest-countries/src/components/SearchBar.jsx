import React, { useCallback, useContext, useState } from "react";
import { store } from "../state/store.js";
import { actionSearch } from "../state/actions";
import styles from "./SearchBar.module.scss"

function SearchBar() {
  const { dispatch } = useContext(store);
  const [value, setValue] = useState("");
  const search = useCallback((val) => dispatch(actionSearch(val)), [dispatch]);

  // useEffect(() => {
  //   setValue("");
  //   search("");
  // }, []);

  const handleChange = (e) => {
    const searchString = e.target.value;
    setValue(searchString);
    search(searchString);
  };

  return (
    <input className={styles.search}
      placeholder="Search for a country"
      onChange={handleChange}
      value={value}
    />
  );
}

export default SearchBar;
