export const FETCHING = "FETCHING";
export const RESPONSE_COMPLETE = "RESPONSE_COMPLETE";
export const ERROR = "ERROR";
export const SEARCH_COUNTRIES = "SEARCH_HEROES";
export const FILTER_REGION = "FILTER_REGION";

export function actionSearch(value) {
  return { type: SEARCH_COUNTRIES, payload: value };
}

export function actionFilter(value) {
  return { type: FILTER_REGION, payload: value };
}
