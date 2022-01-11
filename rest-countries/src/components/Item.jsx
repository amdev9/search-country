import React from "react";
import { Link } from "react-router-dom";
import { apiKeyToLabel } from "../common/helpers";
import styles from "./Item.module.scss";

const Item = (props) => {
  const { item } = props;

  return (
    <div className={styles.item}>
      <Link to={`/countries/${item.alpha3Code}`}>
        <img
          className={styles.item__img}
          src={item.flags.png}
          alt={item.name}
        />

        <div className={styles.item__info}>
          <span className={styles.item__name}>{item.name}</span>
          {["population", "region", "capital"].map(
            (val) =>
              item[val] && (
                <span>
                  <b>{apiKeyToLabel(val)}: </b> {item[val]}
                </span>
              )
          )}
        </div>
      </Link>
    </div>
  );
};

export default Item;
