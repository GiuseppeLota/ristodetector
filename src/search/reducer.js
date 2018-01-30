import { BUSINESSES_FETCH_FAILURE, BUSINESSES_FETCH_SUCCESS } from './actionTypes';

// ------------------------------------
// Selectors

export const getBusinesses = state => state.search.businesses;
export const businessesLoaded = state => state.search.loaded;

// ------------------------------------
// Store & reducer

const initialState = {
  businesses: [],
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case BUSINESSES_FETCH_SUCCESS:
    return {
      ...state,
      businesses: action.payload.map(el => ({
        name: el.name,
        phone: el.phone,
        imageUrl: el.image_url,
        categories: el.categories,
        id: el.id
      })),
      loaded: true,
    };
  case BUSINESSES_FETCH_FAILURE:
    return {
      ...state,
      loaded: true,
    };

  default:
    return state;
  }
}