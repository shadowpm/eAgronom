import * as creators from './creators';
import * as types from '../actionTypes';

describe('categories action creators', () => {
  it('should create categories request action', () => {
    const category_id = 'category_id';
    const expectedAction = {
      type: types.CHANGE_CATEGORY_ID,
      category_id
    };
    expect(creators.createChangeCategoryIdAction(category_id)).toEqual(expectedAction)
  });

  it('should create categories success action', () => {
    const expectedAction = {
      type: types.INCREASE_PAGE_NUMBER
    };
    expect(creators.createIncreasePageNumber()).toEqual(expectedAction)
  });

  it('should create categories failure action', () => {
    const expectedAction = {
      type: types.RESET_PAGE_NUMBER
    };
    expect(creators.createResetPageNumber()).toEqual(expectedAction)
  });
});
