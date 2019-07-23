import * as creators from './creators'

export default () => async (dispatch) => {
  dispatch(creators.createCategorieRequestAction());

  try {
    const result = await fetch('https://api.thecatapi.com/v1/categories');
    const data = await result.json();

    dispatch(creators.createCategorieSuccessAction(data));
  } catch (error) {
    dispatch(creators.createCategorieFailureAction(error))
  }
}
