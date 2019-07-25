import reducer from './index';
import * as types from './actionTypes';

describe('selected reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      category_id: null,
      page: 0
    })
  });

  it('should handle CHANGE_CATEGORY_ID', () => {
    const category_id = 10;
    expect(
      reducer(undefined, {type: types.CHANGE_CATEGORY_ID, category_id})
    ).toEqual({
      category_id,
      page: 0
    })
  });

  it('should handle INCREASE_PAGE_NUMBER', () => {
    expect(
      reducer({
        category_id: 10,
        page: 80
      }, {type: types.INCREASE_PAGE_NUMBER})
    ).toEqual({
      category_id: 10,
      page: 81
    })
  });

  it('should handle RESET_PAGE_NUMBER', () => {
    expect(
      reducer({
        category_id: 10,
        page: 80
      }, {type: types.RESET_PAGE_NUMBER})
    ).toEqual({
      category_id: 10,
      page: 0
    })
  })
});
