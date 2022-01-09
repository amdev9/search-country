
import React, { useCallback, useContext } from "react";
import { store } from '../state/store.js';
import { actionSearch } from '../state/actions';

function SearchBar() {
  const { value, dispatch } = useContext(store);
  const search = useCallback((val) => dispatch(actionSearch(val)), [dispatch]);

  return (
    <input
      placeholder="Search countries"
      onChange={(e) => search(e.target.value)}
      value={value}
    />
  );
}

export default SearchBar;