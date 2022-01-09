import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { store } from "../state/store.js";
import BorderCountries from "./BorderCountries.jsx";

const Country = () => {
  const params = useParams();
  const { state: { countries } } = useContext(store);
  const item = countries.filter(
    (country) => country.alpha3Code === params.id
  )[0];

  return (
    <>
      <h1>{params.id}</h1>
      <BorderCountries borders={item.borders} />
    </>
  );
};

export default Country;
