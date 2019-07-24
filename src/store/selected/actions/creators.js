import * as types from '../actionTypes'

export const createChangeCategoryIdAction = (category_id) => ({ type: types.CHANGE_CATEGORY_ID, category_id});
export const createIncreasePageNumber = () => ({ type: types.INCREASE_PAGE_NUMBER });
export const createResetPageNumber = () => ({ type: types.RESET_PAGE_NUMBER });
