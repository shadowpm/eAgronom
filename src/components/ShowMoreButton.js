import React from 'react';
import {connect} from 'react-redux';
import {createIncreasePageNumber} from "../store/selected/actions/creators";
import fetchCats from "../store/cats/action/fetchCats";
import PropTypes from 'prop-types';

const ShowMoreButton = ({dispatch}) => {
  const onSubmit = () => {
    dispatch(createIncreasePageNumber());
    dispatch(fetchCats());
  };

  return (
    <div className="div-width">
      <button className="item-margin btn" type="submit" onClick={onSubmit}>Show more</button>
    </div>
  )
};

ShowMoreButton.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default connect()(ShowMoreButton);
