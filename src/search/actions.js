import {BUSINESSES_FETCH_FAILURE, BUSINESSES_FETCH_SUCCESS} from './actionTypes';
import {BUSINESSES_URL, LOCATION_SEARCH, PROXY_URL} from './constants';

function fetchBusinessesSuccess(businesses) {
  return {
    type: BUSINESSES_FETCH_SUCCESS,
    payload: businesses
  };
}

function fetchBusinessesFailure(errmessage) {
  return {
    type: BUSINESSES_FETCH_FAILURE,
    payload: errmessage,
  };
}

function getApiUrl(searchParam, locationType) {
  const baseUrl = `${PROXY_URL}/${BUSINESSES_URL}/search`;
  if ((locationType === LOCATION_SEARCH) && searchParam) {
    return baseUrl.concat(`?location=${searchParam}`);
  }
  return baseUrl;
}

function getHeaders() {
  const myHeaders = new Headers();
  // eslint-disable-next-line max-len
  const accessToken = "OcRQzvu19YVTOqXk31W7-lTZvMZ8NuW7n1Ccby9HbzLfY1ro28gJ2J59D8zlKwvN98ZscndKc3BlZ7Vb6QswDOrTdyXljCv1iJDR4r-Yekza-jfr1yuZQHUDXlxvWnYx";
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  return myHeaders;
}

export function fetchBusinesses(searchParam, locationType) {
  return dispatch => {
    return fetch(getApiUrl(searchParam, locationType), {headers: getHeaders()})
      .then(response => {
        if (!response.ok)
          throw new Error('Unable to fetch');
        return response.json();
      })
      .then(data => dispatch(fetchBusinessesSuccess(data.businesses)))
      .catch(error => dispatch(fetchBusinessesFailure(error.message)));
  };
}

// ------------------------------------
// Testing variables

export const testing = {
  fetchBusinessesSuccess,
  fetchBusinessesFailure,
};