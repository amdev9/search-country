import {
  ERROR,
  FETCHING,
  RESPONSE_COMPLETE,
  SEARCH_COUNTRIES,
  FILTER_REGION,
  THEME_SWITCHER,
} from "./actions";

const initialState = {
  countries: [],
  loading: false,
  error: null,
  themeDark: false,
  searched: [],
  filtered: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        countries: [],
        loading: true,
        error: null,
      };

    case RESPONSE_COMPLETE:
      const countriesData = action.payload.result;
      return {
        ...state,
        countries: countriesData,
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

      return { ...state, searched: searchedCountries };

    case FILTER_REGION:
      const { payload } = action;

      const filteredByRegion = state.countries.filter(
        (country) => country.region === payload
      );

      return { ...state, filtered: filteredByRegion };

    case THEME_SWITCHER:
      const { payload: themeBoolean } = action;
      return { ...state, themeDark: themeBoolean };

    default:
      return state;
  }
};

export { reducer, initialState };
