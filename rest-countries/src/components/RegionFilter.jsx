import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { store } from "../state/store.js";
import { actionFilter } from "../state/actions";

function RegionFilter() {
  const { state, dispatch } = useContext(store);
  const [value, setValue] = useState("default");

  const filterAction = useCallback(
    (val) => dispatch(actionFilter(val)),
    [dispatch]
  );

  useEffect(() => {
    setValue("default");
    filterAction();
  }, [filterAction]);

  const regions = useMemo(() => {
    return [
      ...new Set(state.countries.map((country) => country.region)),
    ].sort();
  }, [state.countries]);

  const handleChange = (e) => {
    const pickedRegion = e.target.value;

    setValue(pickedRegion);
    filterAction(pickedRegion);
  };

  return (
    <select onChange={handleChange} value={value}>
      <option value="default">Filter by region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}

export default RegionFilter;
