import reducer from './index';
import * as types from './actionTypes';

describe('cats reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      is_fetching: false,
      data: [],
      error: null
    })
  });

  it('should handle CATS_REQUEST', () => {
    expect(
      reducer(undefined, {type: types.CATS_REQUEST})
    ).toEqual({
      is_fetching: true,
      data: [],
      error: null
    })
  });

  it('should handle CATS_SUCCESS', () => {
    const data = [
      {
        "breeds": [],
        "categories": [],
        "id": "d87",
        "url": "https://25.media.tumblr.com/tumblr_m4gjqmNI3m1qhwmnpo1_500.jpg"
      }
    ];
    expect(
      reducer(undefined, {type: types.CATS_SUCCESS, data})
    ).toEqual({
      is_fetching: false,
      data,
      error: null
    })
  });

  it('should handle CATS_FAILURE', () => {
    const error = 'failure';
    expect(
      reducer(undefined, {type: types.CATS_FAILURE, error})
    ).toEqual({
      is_fetching: false,
      data: [],
      error
    })
  })

  it('should handle CATS_RESET', () => {
    expect(
      reducer(undefined, {type: types.CATS_RESET})
    ).toEqual({
      is_fetching: false,
      data: [],
      error: null
    })
  })
});
