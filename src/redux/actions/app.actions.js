import {appActions} from '../actionTypes';

export const hideLoader = () => dispatch => {
  dispatch({
    type: appActions.HIDE_LOADER,
  });
};

export const showLoader = message => dispatch => {
  dispatch({
    type: appActions.SHOW_LOADER,
    payload: message,
  });
};
