import React from 'react';
import {connect} from 'react-redux';

const ImagesUI = (props) => {
  if (props.is_fetching) {
    return 'loading...'
  } else {
    return (
      <div className="div-width">
        <h1>images</h1>
        <div>{props.cats.map(cat => <img className='image-style' src={cat.url}/>)}</div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  cats: state.cats.data,
  is_fetching: state.cats.is_fetching
});

export default connect(mapStateToProps)(ImagesUI);
