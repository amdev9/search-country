import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.scss";

const Item = (props) => {
  const { item } = props;

  return (
    <div className={styles.item}>
      <Link className={styles.link} to={`/countries/${item.alpha3Code}`}>
        <img src={item.flags.png} alt={item.name} />

        <div className={styles.info}>
          <span className={styles.name}>{item.name}</span>
          <span>{item.population}</span>
          <span>{item.region}</span>
          <span>{item.capital}</span>
        </div>
      </Link>
    </div>
  );
};

export default Item;
