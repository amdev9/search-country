import {
  ERROR,
  FETCHING,
  RESPONSE_COMPLETE,
  SEARCH_COUNTRIES,
  FILTER_REGION,
} from "./actions";

const initialState = {
  countries: [],
  loading: false,
  error: null,
  value: "",
  searched: [],
  filtered: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        countries: null,
        loading: true,
        error: null,
      };

    case RESPONSE_COMPLETE:
      const countriesData = action.payload.result
      return {
        ...state,
        countries: countriesData,
        filtered: countriesData,
        seached: countriesData,
        loading: false,
        error: null,
      };

    case ERROR:
      return {
        ...state,
        countries: null,
        loading: false,
        error: action.payload.error,
      };

    case SEARCH_COUNTRIES:
      const { payload: value } = action;

      const searchedCountries = state.countries.filter((country) =>
        country.name.toLowerCase().includes(value)
      );

      return { ...state, value, searched: searchedCountries };

    case FILTER_REGION:
      const { payload } = action;

      if (payload === "default") {
        return { ...state, filtered: state.countries }
      }
      const filteredByRegion = state.countries.filter(
        (country) => country.region === payload
      );

      return { ...state, filtered: filteredByRegion };

    default:
      return state;
  }
};

export { reducer, initialState };
