import React, { useContext } from "react";
import Item from "./Item";
import { store } from "../state/store";
import styles from "./List.module.scss";

function CountiesList() {
  const { state } = useContext(store);
  const { renderCountries, loading, error } = state;

  const renderCo = renderCountries.length ? renderCountries.map((item) => (
    <Item key={item.numericCode} item={item} />
  )) : "Not found"

  return (
    <div className={styles.items}>
      {loading ? <p>Loading</p> : renderCo}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default React.memo(CountiesList);
