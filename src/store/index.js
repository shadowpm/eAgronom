import { combineReducers } from 'redux';
import cats from './cats';
import categories from './categories';
import selected from './selected';

export default combineReducers({
  cats,
  categories,
  selected
});
