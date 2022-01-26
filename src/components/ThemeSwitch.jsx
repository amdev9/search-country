import React, { useContext } from "react";
import { store } from "../state/store.js";
import { themeToggle } from "../state/actions";
import { useEffect } from "react/cjs/react.development";

function ThemeSwitch() {
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    document.documentElement.classList.add("theme-light");
  }, []);

  const handleClick = () => {
    document.documentElement.className = "";
    document.documentElement.classList.add(
      `theme-${state.themeDark ? "light" : "dark"}`
    );
    dispatch(themeToggle(!state.themeDark));
  };

  return (
    <button onClick={handleClick}>
      Toggle Theme: {state.themeDark.toString()}
    </button>
  );
}

export default ThemeSwitch;
