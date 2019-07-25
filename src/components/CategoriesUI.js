import React from 'react';
import {connect} from 'react-redux'
import Category from './Category';
import PropTypes from 'prop-types';

const CategoriesUI = (props) => {
  if (props.is_fetching) {
    return 'loading...'
  } else {
    return (
      <div>
        <ul>
          {props.categories.map(category => <Category data={category} key={category.id}/>)}
        </ul>
      </div>
    )
  }
};

CategoriesUI.propTypes = {
  is_fetching: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  categories: state.categories.data,
  is_fetching: state.categories.is_fetching
});

export default connect(mapStateToProps)(CategoriesUI);
