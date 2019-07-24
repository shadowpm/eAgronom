import * as types from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CATS_REQUEST:
      return {...state, is_fetching: true};
    case types.CATS_SUCCESS:
      if (state.data.length === 0) {
        return {...initialState, data: action.data};
      } else return {...initialState, data: [...state.data, ...action.data]};
    case types.CATS_FAILURE:
      return {...initialState, error: action.error};
    case types.CATS_RESET:
      return initialState;
    default:
      return state;
  }
}
const initialState = {
  is_fetching: false,
  data: [],
  error: null
};
