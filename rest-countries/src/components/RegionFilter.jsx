import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Select from "react-select";
import { store } from "../state/store.js";
import { actionFilter } from "../state/actions";
import styles from "./RegionFilter.module.scss"

function RegionFilter() {
  const { state, dispatch } = useContext(store);
  const [selectedOption, setSelectedOption] = useState(null);

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

    setSelectedOption(pickedRegion);
    filterAction(pickedRegion);
  };

  const options = regions.map((region) => {
    return { value: region, label: region };
  });

  return (
    <Select
      className={styles.select}
      isSearchable={false}
      placeholder={"Filter by region"}
      onChange={handleChange}
      options={options}
      value={options.filter(function (option) {
        return option.value === selectedOption;
      })}
    />
  );
}

export default RegionFilter;
