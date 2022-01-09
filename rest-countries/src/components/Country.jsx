import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { store } from "../state/store.js";
import Button from "./Button.jsx";

const Country = () => {
  const params = useParams();
  const { state } = useContext(store);
  const item = state.countries.filter(country => country.numericCode === params.id)[0];

  console.log('params ', params.id, item)
  return (
    <>
      <h1>{params.id}</h1>
      <Button />
    </>
  );
};

export default Country;
