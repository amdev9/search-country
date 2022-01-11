import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { store } from "../state/store.js";

import Button from './UI/Button';
import BorderCountries from "./BorderCountries";
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
      <div className={styles.back}>
        <Button onClick={() => history.goBack()}>Back</Button>
      </div>
      <div className={styles.wrapper}>
        <img className={styles.img} src={item.flags.png} alt={item.name} />

        <div className={styles.info}>
          <span className={styles.name}>{item.name}</span>
          {/* TODO: use keys transformation as labels */}
          <div className={styles.info__basic}>
            <span>
              <b>Native Name: </b>
              {item.nativeName}
            </span>
            <span>
              <b>Population: </b> {item.population}
            </span>
            <span>
              <b>Region: </b>
              {item.region}
            </span>
            <span>
              <b>Sub Region: </b>
              {item.subregion}
            </span>
            <span>
              <b>Capital: </b>
              {item.capital}
            </span>
          </div>
          <div className={styles.info__additional}>
            <span>
              <b>Top Level Domain: </b>
              {item.topLevelDomain}
            </span>
            <span>
              <b>Currencies: </b>
              {item.currencies.map((curr) => curr.name).join(", ")}
            </span>
            <span>
              <b>Languages: </b>
              {item.languages.map((lang) => lang.name).join(", ")}
            </span>
          </div>
          <BorderCountries borders={item.borders} />
        </div>
      </div>
    </Layout>
  );
};

export default Country;
