import * as creators from './creator';

export default () => async (dispatch, getState) => {
  dispatch(creators.createCatsRequestAction());

  try {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10&category_ids=' + getState().selected.category_id + '&page=' + getState().selected.page;
    console.log('hi', url);
    const result = await fetch(url);
    const data = await result.json();

    dispatch(creators.createCatsSuccessAction(data))
  } catch (error) {
    dispatch(creators.createCatsFailureAction(error))
  }
}
