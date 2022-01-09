import React, { useContext } from "react";
import Item from "./Item";

import { store } from '../state/store'

function CountiesList() {

  const { state} = useContext(store)
  const { works, loading, error } = state
  console.log('countries', works, loading)

  return (
    <>
      {loading ? (
        <p>Loading…</p>
      ) : (
        works.map((item) => <Item key={item.numericCode} item={item} />)
      )}
      {error && <p>{error.message}</p>}
    </>
  );
}
 

export default React.memo(CountiesList);
