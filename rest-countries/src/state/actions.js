export const FETCHING = "FETCHING";
export const RESPONSE_COMPLETE = "RESPONSE_COMPLETE";
export const ERROR = "ERROR";
export const CONDITION = "CONDITION";
export const THEME_SWITCHER = "THEME_SWITCHER";


export const actionSearch = (term, value) => ({
  type: CONDITION,
  payload: value,
  meta: term
});

// export function actionSearch(value) {
//   return { type: SEARCH_COUNTRIES, payload: value };
// }

// export function actionFilter(value) {
//   return { type: FILTER_REGION, payload: value };
// }

export function themeToggle(value) {
  return { type: THEME_SWITCHER, payload: value };
}

