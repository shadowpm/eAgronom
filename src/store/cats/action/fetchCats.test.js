import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchCats from './fetchCats'
import * as types from '../actionTypes'
import fetchMock from 'fetch-mock'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch cats action', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('creates CATS_SUCCESS when fetching categories has been done', () => {
    const data = [
      {
        "breeds": [],
        "categories": [],
        "id": "d87",
        "url": "https://25.media.tumblr.com/tumblr_m4gjqmNI3m1qhwmnpo1_500.jpg"
      }
    ];

    fetchMock.getOnce('https://api.thecatapi.com/v1/images/search?limit=10&category_ids=1&page=0', {
      body: data,
      headers: {'content-type': 'application/json'}
    });

    const expectedActions = [
      {type: types.CATS_REQUEST},
      {type: types.CATS_SUCCESS, data}
    ];

    const store = mockStore({
      selected: {
        category_id: 1,
        page: 0
      },
      cats: {
        is_fetching: false,
        data: [],
        error: null
      }
    });

    return store.dispatch(fetchCats()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
});
