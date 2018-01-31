import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, {getBusinesses, businessesLoaded} from '../reducer';

import {
  testing,
  fetchBusinesses
} from '../actions';

const mockStore = configureMockStore([thunk]);

test('fetch businesses with success', done => {
  const data = {businesses: [{
    name: "NAME",
    image_url: "IMAGE_URL",
    id: "ID",
    categories: [{title: 'TITLE'}]
  }]};

  fetch.mockResponse(JSON.stringify(data));

  const store = mockStore();
  const expectedActions = [
    testing.fetchBusinessesSuccess(data.businesses)
  ];

  return store.dispatch(fetchBusinesses())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

test('fetch businesses with error', done => {
  const errorMessage = 'System error';
  fetch.mockReject(new Error(errorMessage));

  const store = mockStore();
  const expectedActions = [
    testing.fetchBusinessesFailure(errorMessage),
  ];

  return store.dispatch(fetchBusinesses())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

test('handle the fetchBusinessesSuccess action', () => {
  const initialState = {
    businesses: [],
    loaded: false
  };

  const data = [{
    name: "NAME",
    image_url: "IMAGE_URL",
    id: "ID",
    phone: "PHONE_NUM",
    location: {
      display_address: []
    }
  }];

  const newState = reducer(initialState, testing.fetchBusinessesSuccess(data));
  expect(newState.businesses).toEqual([{
    name: "NAME",
    imageUrl: "IMAGE_URL",
    id: "ID",
    phone: "PHONE_NUM",
    address: []
  }]);
  expect(newState.loaded).toEqual(true);
});

test('handle the fetchBusinessesFailure action', () => {
  const initialState = {
    contributors: [],
    loaded: false,
  };

  const newState = reducer(initialState, testing.fetchBusinessesFailure('Error during fetching'));
  expect(newState.contributors).toEqual([]);
  expect(newState.loaded).toEqual(true);
});

test('handle an unknown action', () => {
  const newState = reducer();
  expect(newState.businesses).toEqual([]);
  expect(newState.loaded).toEqual(false);
});

// ------------------------------------
// Testing the store selectors

test('get the businesses selector', () => {
  const searchState = {
    businesses: [{
      name: "NAME",
      imageUrl: "IMAGE_URL",
      id: "ID",
      phone: "PHONE_NUM",
      categories: [{title: 'TITLE'}]
    }],
    loaded: false,
  };

  expect(getBusinesses({search: searchState})).toEqual(searchState.businesses);
});

test('businesses loaded selector', () => {
  const searchState = {
    businesses: [],
    loaded: true,
  };

  expect(businessesLoaded({search: searchState})).toEqual(true);
});
