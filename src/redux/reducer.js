const inititalState = {
  data: [],
  loading: false,
};

const data = (state = { ...inititalState }, action) => {
  switch (action.type) {
    case 'SET_DATA_START':
      return {
        ...state,
        loading: true,
      };
    case 'SET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'SET_DATA_FAILED':
      return {
        ...state,
        loading: false,
      };
    case 'SET_DATA_DETAIL_START':
      return {
        ...state,
        loading: true,
      };
    case 'SET_DATA_DETAIL_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'SET_DATA_DETAIL_FAILED':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default data;
