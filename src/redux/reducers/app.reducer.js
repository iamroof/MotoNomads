import {appActions} from '../actionTypes';

const initialState = {
  loader: {show: false, message: ''},
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case appActions.SHOW_LOADER:
      const payload = {show: true, message: action.payload};
      return {...state, loader: payload};
    case appActions.HIDE_LOADER:
      return {...state, loader: {show: false, message: ''}};
    default:
      return state;
  }
}

export default appReducer;
