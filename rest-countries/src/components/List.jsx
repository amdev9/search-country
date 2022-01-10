import React, { useContext, useMemo } from "react";
import Item from "./Item";
import { store } from "../state/store";
import styles from "./List.module.scss";

function CountiesList() {
  const { state } = useContext(store);
  const { filtered, searched, countries, loading, error } = state;

  const countryUnion = useMemo(
    () => searched.filter((a) => filtered.some((b) => a.name === b.name)),
    [filtered, searched]
  );

  let renderCountries = [];
  if (searched.length && filtered.length) {
    renderCountries = countryUnion;
  } else if (!searched.length && filtered.length) {
    renderCountries = filtered;
  } else if (searched.length && !filtered.length) {
    renderCountries = searched;
  } else {
    renderCountries = countries;
  }

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
