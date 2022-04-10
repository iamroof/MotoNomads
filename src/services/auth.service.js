import auth from '@react-native-firebase/auth';

export async function signInWithPhoneNumber(phoneNumber) {
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  return confirmation;
}

export async function loginAsAnonymous() {
  const status = await auth().signInAnonymously();
  return status;
}

export async function logout() {
  const status = await auth().signOut();
  return status;
}

export async function verifyCode(authConfirm, verificationCode) {
  try {
    await authConfirm.confirm(verificationCode);
    return 1;
  } catch (error) {
    return 0;
  }
}
