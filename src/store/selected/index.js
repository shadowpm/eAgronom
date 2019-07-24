import * as types from './actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CATEGORY_ID:
      return {...initialState, category_id: action.category_id};
    case types.INCREASE_PAGE_NUMBER:
      return {...state, page: state.page + 1 };
    case types.RESET_PAGE_NUMBER:
      return {...state, page: 0};
    default:
      return state;
  }
}
const initialState = {
  category_id: null,
  page: 0
};
