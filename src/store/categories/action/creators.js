import * as types from '../actionTypes'

export const createCategorieRequestAction = () => ({ type: types.CATEGORIES_REQUEST });
export const createCategorieSuccessAction = ( data ) => ({ type: types.CATEGORIES_SUCCESS, data });
export const createCategorieFailureAction = ( error ) => ({ type: types.CATEGORIES_FAILURE, error });
