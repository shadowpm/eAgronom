import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchCategories from './fetchCategories'
import * as types from '../actionTypes'
import fetchMock from 'fetch-mock'
// import expect from 'expect'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch categories action', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('creates CATEGORIES_SUCCESS when fetching categories has been done', () => {
    const data = [
      {
        "id": 5,
        "name": "boxes"
      },
      {
        "id": 6,
        "name": "caturday"
      }
    ];

    fetchMock.getOnce('https://api.thecatapi.com/v1/categories', {
      body: data,
      headers: {'content-type': 'application/json'}
    });

    const expectedActions = [
      {type: types.CATEGORIES_REQUEST},
      {type: types.CATEGORIES_SUCCESS, data}
    ];

    const store = mockStore({
      is_fetching: false,
      data: [],
      error: null
    });

    return store.dispatch(fetchCategories()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
});
