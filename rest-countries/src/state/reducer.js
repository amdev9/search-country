import {
  ERROR,
  FETCHING,
  RESPONSE_COMPLETE,
  SEARCH_COUNTRIES,
} from "./actions";

const initialState = {
  countries: [],
  loading: false,
  error: null,
  value: "",
  works: [],
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
      return {
        ...state,
        countries: action.payload.result,
        works: action.payload.result,
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

      const works = state.countries.filter((country) =>
        country.name.toLowerCase().includes(value)
      );

      return { ...state, value, works };

    default:
      return state;
  }
};

export { reducer, initialState };
