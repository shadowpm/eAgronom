import * as creators from './creators';
import * as types from '../actionTypes';

describe('categories action creators', () => {
  it('should create categories request action', () => {
    const expectedAction = {
      type: types.CATEGORIES_REQUEST
    };
    expect(creators.createCategorieRequestAction()).toEqual(expectedAction)
  });

  it('should create categories success action', () => {
    const data = 'data';
    const expectedAction = {
      type: types.CATEGORIES_SUCCESS,
      data
    };
    expect(creators.createCategorieSuccessAction(data)).toEqual(expectedAction)
  });

  it('should create categories failure action', () => {
    const error = 'error';
    const expectedAction = {
      type: types.CATEGORIES_FAILURE,
      error
    };
    expect(creators.createCategorieFailureAction(error)).toEqual(expectedAction)
  });
});
