export const FETCHING = "FETCHING";
export const RESPONSE_COMPLETE = "RESPONSE_COMPLETE";
export const ERROR = "ERROR";
export const SEARCH_COUNTRIES = "SEARCH_HEROES";


export function actionSearch(value) {
  return { type: SEARCH_COUNTRIES, payload: value };
}

