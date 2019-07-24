import React from 'react';
import {connect} from 'react-redux';
import LoadButton from './ShowMoreButton'

const ImagesUI = (props) => {
  return (
    <div>
      <div className="div-width">
        <h3 className="item-margin">Choose category to see images /ᐠ.ᆽ.ᐟ\</h3>
        <div>{props.cats.map(cat => <img className='image-style' src={cat.url}/>)}</div>
      </div>
      {props.is_fetching && <div className="div-width item-margin">Loading...</div>}
      {props.cats.length > 0 && <LoadButton/>}
    </div>
  )
};

const mapStateToProps = (state) => ({
  cats: state.cats.data,
  is_fetching: state.cats.is_fetching
});

export default connect(mapStateToProps)(ImagesUI);
