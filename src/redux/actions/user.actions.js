import {userActions} from '../actionTypes';

export const loginAsAnonymous = () => dispatch => {
  dispatch({
    type: userActions.LOGIN_AS_ANONYMOUS,
  });
};

export const sendOtp = mobileNo => dispatch => {
  console.log('ACTIONS ', mobileNo);
  dispatch({
    type: userActions.SEND_OTP,
    payload: mobileNo,
  });
};

export const verifyOtp = otp => dispatch => {
  dispatch({
    type: userActions.VERIFY_OTP,
    payload: otp,
  });
};

export const updateUserInfo = user => dispatch => {
  dispatch({
    type: userActions.UPDATE_USER_INFO,
    payload: user,
  });
};

export const updateAuthStatus = status => dispatch => {
  dispatch({
    type: userActions.UPDATE_AUTH_STATUS,
    payload: status,
  });
};

export const setAuthConfirm = confirm => dispatch => {
  dispatch({
    type: userActions.SET_AUTH_CONFIRM,
    payload: confirm,
  });
};

export const setOTPStatus = status => dispatch => {
  dispatch({
    type: userActions.SET_OTP_STATUS,
    payload: status,
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: userActions.LOGOUT,
  });
};
