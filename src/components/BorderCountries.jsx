import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import { store } from "../state/store.js";
import styles from "./BorderCountries.module.scss";

function BoarderCountries({ borders }) {
  
  const {
    state: { countries },
  } = useContext(store);

  const linkCountry = (code) => countries.filter((country) => country.alpha3Code === code)[0].name

  const countryButton = (borderCode) => (
    <Button key={borderCode}>
      <Link to={`/countries/${borderCode}`}>
        { linkCountry(borderCode) }
      </Link>
    </Button>
  );

  return (
    <div className={styles.wrapper}>
      {borders && <div className={styles.label}>Border countries: </div>}
      <div className={styles.items}>
        {borders && borders.map((borderCode) => countryButton(borderCode))}
      </div>
    </div>
  );
}

export default React.memo(BoarderCountries);
