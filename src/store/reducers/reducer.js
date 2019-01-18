import * as constants from '../constants';

const initialState = {
  openDrawer: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.OPEN_DRAWER:
      return {
        ...state,
        openDrawer: true
      };
    case constants.CLOSE_DRAWER:
      return {
        ...state,
        openDrawer: false
      };
    default:
      return state;
  }
};

export default reducer;