import React, { useContext } from "react";
import { store } from "../state/store.js";
import { themeToggle } from "../state/actions";

function RegionFilter() {
  const { state, dispatch } = useContext(store);
  
  const handleClick = () => {
    dispatch(themeToggle(!state.themeDark))
  }

  return <button onClick={handleClick}>Toggle Theme: {state.themeDark.toString()}</button>
}

export default RegionFilter;
