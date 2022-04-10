import {AuthType} from '../../models/model';
import {userActions} from '../actionTypes';

const initialState = {
  authStatus: AuthType.UNAUTHORIZED,
  userInfo: {
    phoneNumber: null,
  },
  authConfirm: null,
  otpStatus: 0,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActions.UPDATE_AUTH_STATUS:
      return {...state, authStatus: action.payload};
    case userActions.UPDATE_USER_INFO:
      return {...state, userInfo: action.payload};
    case userActions.SET_AUTH_CONFIRM:
      return {...state, authConfirm: action.payload};
    case userActions.SET_OTP_STATUS:
      return {...state, otpStatus: action.payload};
    default:
      return state;
  }
}

export default userReducer;
