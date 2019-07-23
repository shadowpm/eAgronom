import React from 'react';
import './App.css';
import CategoriesUI from './components/CategoriesUI';
import ImagesUI from './components/ImagesUI';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './store'
import thunkMiddleware from 'redux-thunk'
import fetchCategories from './store/categories/action/fetchCategories'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchCategories());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CategoriesUI/>
        <ImagesUI/>
      </div>
    </Provider>
  );
}

export default App;
