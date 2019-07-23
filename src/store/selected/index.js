import * as types from './actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CATEGORY_ID:
      return {...initialState, category_id: action.category_id};
    default:
      return state;
  }
}
const initialState = {
  category_id: null,
  page: null
};
