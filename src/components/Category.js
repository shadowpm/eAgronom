import React from 'react';
import {createChangeCategoryIdAction, createResetPageNumber} from "../store/selected/actions/creators";
import {connect} from 'react-redux';
import fetchCats from "../store/cats/action/fetchCats";
import {createCatsResetAction} from "../store/cats/action/creators";
import PropTypes from 'prop-types';

const Category = (props) => {
  const className = props.data.id === props.category_id ? 'active' : null;
  const onClick = () => props.onChangeId(props.data.id);

  return (
    <li><a className={className} onClick={onClick} href={'#'}>{props.data.name}</a></li>
  )
};

Category.propTypes = {
  data: PropTypes.object.isRequired,
  onChangeId: PropTypes.func.isRequired,
  category_id: PropTypes.number.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
