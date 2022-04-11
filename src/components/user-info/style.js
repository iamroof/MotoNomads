import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userInfoContainer: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    alignItems: 'center',
  },
  userNumberContainer: {
    paddingTop: 15,
  },
  userNumber: {
    fontSize: 18,
    color: '#041E3F',
  },
  userImage: {
    backgroundColor: '#f7f7f7',
    borderWidth: 0.5,
    borderColor: '#D4d4d4',
  },
  loginBtn: {
    borderColor: '#D4d4d4',
    padding: 10,
  },
  loginBtnContainer: {
    width: 250,
    marginVertical: 30,
  },
  loginBtnText: {color: '#041E3F', fontSize: 15},
  loginHint: {fontSize: 16, color: '#041E3F', opacity: 0.5},
});

export default styles;
