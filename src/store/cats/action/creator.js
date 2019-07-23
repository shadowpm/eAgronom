import * as types from '../actionTypes';

export const createCatsRequestAction = () => ({type: types.CATS_REQUEST});
export const createCatsSuccessAction = ( data ) => ({type: types.CATS_SUCCESS, data});
export const createCatsFailureAction = ( error ) => ({type: types.CATS_FAILURE, error});
