import * as constants from '../constants';

export const openDrawer = () => {
  return {
    type: constants.OPEN_DRAWER
  };
};

export const closeDrawer = () => {
  return {
    type: constants.CLOSE_DRAWER
  };
};