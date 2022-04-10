import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: '100%',
    backgroundColor: '#FFD837',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  logo: {width: 200, height: 200},
  otpContainer: {flex: 1, alignItems: 'center'},
  phoneInputContainer: {width: '100%'},
  sendOtpBtn: {
    borderColor: '#D4d4d4',
    padding: 10,
  },
  verifyContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  verifyInputContainer: {paddingTop: 30, paddingLeft: 30},
  sendOtpBtnContainer: {
    width: 250,
    marginVertical: 40,
  },
  verifyInputHint: {fontSize: 16, color: '#041E3F', opacity: 0.5},
  sendOtpBtnText: {color: '#041E3F', fontSize: 15},
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#041E3F',
  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 0.5,
    borderBottomWidth: 1,
    borderColor: '#D4d4d4',
    color: '#041E3F',
    backgroundColor: '#FFFFFF',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default styles;
