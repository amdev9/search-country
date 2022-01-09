import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { store } from "../state/store.js";

function BoarderCountries({ borders }) {
  const {
    state: { countries },
  } = useContext(store);

  return (
    <>
      {borders.map((borderCode) => (
        <Button key={borderCode}>
          <Link to={`/countries/${borderCode}`}>
            {
              countries.filter(
                (country) => country.alpha3Code === borderCode
              )[0].name
            }
          </Link>
        </Button>
      ))}
    </>
  );
}

export default React.memo(BoarderCountries);
