import React, {
  useCallback,
  useContext,
  // useEffect,
  useMemo,
  // useState,
} from "react";

import { store } from "../state/store.js";
import { actionFilter } from "../state/actions";
import Dropdown from "./UI/Dropdown";
import styles from "./RegionFilter.module.scss";

function RegionFilter() {
  const { state, dispatch } = useContext(store);

  const filterAction = useCallback(
    (val) => dispatch(actionFilter(val)),
    [dispatch]
  );

  // useEffect(() => {
  //   setSelectedOption(null);
  //   filterAction();
  // }, []);

  const regions = useMemo(() => {
    return [
      ...new Set(state.countries.map((country) => country.region)),
    ].sort();
  }, [state.countries]);

  const handleChange = (e) => {
    const pickedRegion = e.value;
    filterAction(pickedRegion);
  };

  const options = regions.map((region) => {
    return { value: region, label: region };
  });

  return (
    <div className={styles.filter}>
      <Dropdown
        name="region"
        title="Filter by region"
        list={options}
        onChange={handleChange}
      />
    </div>
  );
}

export default RegionFilter;
