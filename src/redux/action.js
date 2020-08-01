import axios from 'axios';

export const setDataFromApiSuccess = (data) => ({
  type: 'SET_DATA_SUCCESS',
  payload: data,
});

export const setDataFromApiStart = () => ({
  type: 'SET_DATA_START',
});

export const setDataFromApiFailed = () => ({
  type: 'SET_DATA_FAILED',
});

export const setDataDetFromApiSuccess = (data) => ({
  type: 'SET_DATA_DETAIL_SUCCESS',
  payload: data,
});

export const setDataDetFromApiStart = () => ({
  type: 'SET_DATA_DETAIL_START',
});

export const setDataDetFromApiFailed = () => ({
  type: 'SET_DATA_DETAIL_FAILED',
});

export const fetchListDrink = () => {
  return (dispatch) => {
    dispatch(setDataFromApiStart());

    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m')
      .then((res) => {
        dispatch(setDataFromApiSuccess(res.data.drinks));
      })
      .catch((err) => {
        dispatch(setDataFromApiFailed);
      });
  };
};

export const fetchDetailDrink = () => {
  return (dispatch) => {
    dispatch(setDataDetFromApiStart());

    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((res) => {
        dispatch(setDataDetFromApiSuccess(res.data.drinks));
      })
      .catch((err) => {
        dispatch(setDataDetFromApiFailed);
      });
  };
};
