import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import Button from "./UI/Button";
import BorderCountries from "./BorderCountries";
import Layout from "./Layout";
import { store } from "../state/store.js";
import { apiKeyToLabel } from "../common/helpers";
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
      <div className={styles.container}>
        <div className={styles.back}>
          <Button onClick={() => history.goBack()}>Back</Button>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.img} src={item.flags.png} alt={item.name} />

          <div className={styles.info}>
            <span className={styles.name}>{item.name}</span>
            <div className={styles.info__basic}>
              {[
                "nativeName",
                "population",
                "region",
                "subregion",
                "capital",
              ].map(
                (val) =>
                  item[val] && (
                    <span key={val}>
                      <b>{apiKeyToLabel(val)}: </b> {item[val]}
                    </span>
                  )
              )}
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
      </div>
    </Layout>
  );
};

export default Country;
