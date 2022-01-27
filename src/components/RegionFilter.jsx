import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";

import { store } from "../state/store.js";
import { actionSearch } from "../state/actions";
import Dropdown from "./UI/Dropdown";
import styles from "./RegionFilter.module.scss";

function RegionFilter() {
  const { state, dispatch } = useContext(store);
  const dropdownRef = useRef(null);

  const filterAction = useCallback(
    (val) => dispatch(actionSearch('filter', val)),
    [dispatch]
  );

  useEffect(() => {
    state.filterRegion && dropdownRef.current.selectSingleItem({ value: state.filterRegion });
  }, [state.filterRegion])

  const regions = () => {
    return [
      ...new Set(state.countries.map((country) => country.region)),
    ].sort();
  };

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
        ref={dropdownRef}
        name="region"
        title="Filter by region"
        list={options}
        onChange={handleChange}
      />
    </div>
  );
}

export default RegionFilter;
