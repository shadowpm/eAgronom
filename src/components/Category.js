import React from 'react';
import {createChangeCategoryIdAction, createResetPageNumber} from "../store/selected/actions/creators";
import {connect} from 'react-redux';
import fetchCats from "../store/cats/action/fetchCats";
import {createCatsResetAction} from "../store/cats/action/creator";
import PropTypes from 'prop-types';

const Category = (props) => {
  const className = props.data.id === props.category_id ? 'active' : null;
  const onClick = () => props.onChangeId(props.data.id);

  return (
    <li><a className={className} onClick={onClick} href={'#'}>{props.data.name}</a></li>
  )
};

const mapStateToProps = (state) => ({
  category_id: state.selected.category_id
});

const mapDispatchToProps = (dispatch) => ({
  onChangeId: (category_id) => {
    dispatch(createChangeCategoryIdAction(category_id));
    dispatch(createCatsResetAction());
    dispatch(createResetPageNumber());
    dispatch(fetchCats())
  }
});

Category.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
