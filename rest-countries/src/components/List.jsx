import React, { useContext, useMemo } from "react";
import Item from "./Item";

import { store } from "../state/store";

function CountiesList() {
  const { state } = useContext(store);
  const { filtered, searched, countries, loading, error } = state;

  const countryUnion = useMemo(
    () => searched.filter((a) => filtered.some((b) => a.name === b.name)),
    [filtered, searched]
  );

  return (
    <>
      {loading ? (
        <p>Loading…</p>
      ) : (
        (filtered.length === countries.length && searched.length === 0
          ? countries
          : countryUnion
        ).map((item) => <Item key={item.numericCode} item={item} />)
      )}
      {error && <p>{error.message}</p>}
    </>
  );
}

export default React.memo(CountiesList);
