import * as types from './actionTypes'

export default ( state = initialState, action ) => {
  switch (action.type) {
    case types.CATEGORIES_REQUEST:
      return {...state, is_fetching: true};
    case types.CATEGORIES_SUCCESS:
      return {...initialState, data: action.data};
    case types.CATEGORIES_FAILURE:
      return {...initialState, error: action.error};
    default:
      return state;
  }
}
const initialState = {
  is_fetching: false,
  data: [],
  error: null
};
