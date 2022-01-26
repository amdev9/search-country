import { useEffect, useContext } from "react";
import { ERROR, FETCHING, RESPONSE_COMPLETE } from "../state/actions";
import { store } from "../state/store.js";

const useFetch = (url) => {
  const {
    dispatch,
    state: { countries },
  } = useContext(store);

  useEffect(() => {
    if (countries.length > 0) {
      return;
    }

    dispatch({ type: FETCHING });

    const fetchUrl = async () => {
      try {
        const response = await fetch(url);

        const data = await response.json();

        dispatch({ type: RESPONSE_COMPLETE, payload: { result: data } });
      } catch (error) {
        dispatch({ type: ERROR, payload: { error } });
      }
    };

    fetchUrl();
  }, [url, dispatch, countries.length]);
};

export default useFetch;
