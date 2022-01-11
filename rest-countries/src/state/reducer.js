import {
  ERROR,
  FETCHING,
  RESPONSE_COMPLETE,
  CONDITION,
  // THEME_SWITCHER,
} from "./actions";

const initialState = {
  countries: [],
  loading: false,
  error: null,
  themeDark: false,
  renderCountries: [],
  searchValue: "",
  filterRegion: null,
};

const reducer = (state, action) => {
  // // all logic to reducer
  // const countryIntersect = useMemo(
  //   () => searched.filter((a) => filtered.some((b) => a.name === b.name)),
  //   [filtered, searched]
  // );

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
        renderCountries: countriesData,
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

    case CONDITION: // filter, search parametrization
      const { payload, meta } = action;

      if (meta === "filter") {
        const filteredByRegion = state.countries.filter(
          (country) => country.region === payload
        );

        if (state.searchValue) {
          const searchedCountries = state.countries.filter((country) =>
            country.name.toLowerCase().includes(state.searchValue)
          );

          const renderCountries = searchedCountries.filter((a) =>
            filteredByRegion.some((b) => a.name === b.name)
          );

          return {
            ...state,
            filterRegion: payload,
            renderCountries,
          };
        }

        return {
          ...state,
          filterRegion: payload,
          renderCountries: filteredByRegion,
        };
      } else {
        const searchedCountries = state.countries.filter((country) =>
          country.name.toLowerCase().includes(payload)
        );

        if (payload) {
          if (state.filterRegion) {
            const filteredByRegion = state.countries.filter(
              (country) => country.region === state.filterRegion
            );

            const renderCountries = filteredByRegion.filter((a) =>
              searchedCountries.some((b) => a.name === b.name)
            );

            return {
              ...state,
              searchValue: payload,
              renderCountries,
            };
          }
          return {
            ...state,
            searchValue: payload,
            renderCountries: searchedCountries,
          };
        }
      }
      return state;
    // case THEME_SWITCHER:
    //   const { payload: themeBoolean } = action;
    //   return { ...state, themeDark: themeBoolean };

    default:
      return state;
  }
};

export { reducer, initialState };
