import reducer from './index';
import * as types from './actionTypes';

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      is_fetching: false,
      data: [],
      error: null
    })
  })

  it('should handle CATEGORIES_REQUEST', () => {
    expect(
      reducer(undefined, {type: types.CATEGORIES_REQUEST})
    ).toEqual({
      is_fetching: true,
      data: [],
      error: null
    })
  });

  it('should handle CATEGORIES_SUCCESS', () => {
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
    expect(
      reducer(undefined, {type: types.CATEGORIES_SUCCESS, data})
    ).toEqual({
      is_fetching: false,
      data,
      error: null
    })
  })

  it('should handle CATEGORIES_FAILURE', () => {
    const error = 'failure';
    expect(
      reducer(undefined, {type: types.CATEGORIES_FAILURE, error})
    ).toEqual({
      is_fetching: false,
      data: [],
      error
    })
  })
});
