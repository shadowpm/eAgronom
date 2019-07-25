import * as creators from './creators';
import * as types from '../actionTypes';

describe('cats action creators', () => {
  it('should create cats request action', () => {
    const expectedAction = {
      type: types.CATS_REQUEST
    };
    expect(creators.createCatsRequestAction()).toEqual(expectedAction)
  });

  it('should create cats success action', () => {
    const data = 'data';
    const expectedAction = {
      type: types.CATS_SUCCESS,
      data
    };
    expect(creators.createCatsSuccessAction(data)).toEqual(expectedAction)
  });

  it('should create cats failure action', () => {
    const error = 'error';
    const expectedAction = {
      type: types.CATS_FAILURE,
      error
    };
    expect(creators.createCatsFailureAction(error)).toEqual(expectedAction)
  });

  it('should create cats reset action', () => {
    const expectedAction = {
      type: types.CATS_FAILURE
    };
    expect(creators.createCatsFailureAction()).toEqual(expectedAction)
  });
});
