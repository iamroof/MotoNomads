import {put, take, fork, all, select} from 'redux-saga/effects';
import {userActions} from '../actionTypes';
import {
  updateAuthStatus,
  setOTPStatus,
  setAuthConfirm,
} from '../actions/user.actions';
import {
  signInWithPhoneNumber,
  verifyCode,
  logout,
  loginAsAnonymous,
} from '../../services/auth.service';
import {AuthType} from '../../models/model';

function* sendOtp(mobileNo) {
  const status = yield signInWithPhoneNumber(mobileNo);
  if (status) {
    yield put(setAuthConfirm(status));
    yield put(setOTPStatus(1));
  } else {
    yield put(setOTPStatus(3));
  }
}

function* verifyOtp(payload) {
  const status = yield verifyCode(
    payload.authConfirm,
    payload.verificationCode,
  );
  if (status === 1) {
    yield put(setOTPStatus(2));
    yield put(updateAuthStatus(AuthType.USER));
  } else {
    yield put(setOTPStatus(3));
  }
}

function* watchLogout() {
  while (true) {
    yield take(userActions.LOGOUT);
    yield fork(logout);
  }
}

function* watchSendOtp() {
  while (true) {
    const {payload} = yield take(userActions.SEND_OTP);
    console.log('from saga ', payload);
    yield fork(sendOtp, payload);
  }
}

function* watchAnonymousLogin() {
  while (true) {
    yield take(userActions.LOGIN_AS_ANONYMOUS);
    yield fork(loginAsAnonymous);
  }
}

function* watchVerifyOtp() {
  while (true) {
    const {payload} = yield take(userActions.VERIFY_OTP);
    yield fork(verifyOtp, payload);
  }
}

export function* userSaga() {
  yield all([
    fork(watchSendOtp),
    fork(watchVerifyOtp),
    fork(watchLogout),
    fork(watchAnonymousLogin),
  ]);
}
