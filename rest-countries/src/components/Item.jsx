import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { item } = props;

  return (
    <Link to={`/countries/${item.alpha3Code}`}>
      <h1>{item.name}</h1>
    </Link>
  );
};

export default Item;