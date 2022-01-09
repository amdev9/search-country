import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { store } from "../state/store.js";
import BorderCountries from "./BorderCountries.jsx";
import Button from "./Button.jsx";
import Layout from "./Layout";
import styles from "./Country.module.scss";

const Country = () => {
  const params = useParams();
  const history = useHistory();
  const {
    state: { countries },
  } = useContext(store);
  const item = countries.filter(
    (country) => country.alpha3Code === params.id
  )[0];

  return (
    <Layout>
      <Button onClick={() => history.goBack()}>Back</Button>
      <div>
        <img src={item.flags.png} alt={item.name} />

        <div className={styles.info}>
          <span className={styles.name}>{item.name}</span>
          <span>Native Name: {item.nativeName}</span>
          <span>Population: {item.population}</span>
          <span>Region: {item.region}</span>
          <span>Sub Region: {item.subregion}</span>
          <span>Capital: {item.capital}</span>

          <span>Top Level Domain: {item.topLevelDomain}</span>
          <span>Currencies: {item.currencies.map(curr => curr.name).join(', ')}</span>
          <span>Languages: {item.languages.map(lang => lang.name).join(', ')}</span>

        </div>
      </div>
      <BorderCountries borders={item.borders} />
    </Layout>
  );
};

export default Country;
