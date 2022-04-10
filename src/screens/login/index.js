/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Button} from '@rneui/themed';
import {useSelector, useDispatch} from 'react-redux';
import {sendOtp, verifyOtp} from '../../redux/actions/user.actions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './style';
import Toast from 'react-native-simple-toast';
import {hideLoader, showLoader} from '../../redux/actions/app.actions';

const LoginScreen = ({navigation}) => {
  const {otpStatus, authConfirm} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [mobileNo, setMobileNo] = useState('');
  const [mobileNoWithCC, setMobileNoWithCC] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const phoneInput = useRef(null);

  const sendOTP = () => {
    const checkValid = phoneInput.current?.isValidNumber(mobileNo);
    if (checkValid) {
      dispatch(showLoader());
      dispatch(sendOtp(mobileNoWithCC));
    } else {
      Toast.show('Please provide proper number', Toast.LONG);
    }
  };

  const verifyOTP = () => {
    dispatch(showLoader());
    dispatch(verifyOtp({verificationCode, authConfirm}));
  };

  useEffect(() => {
    if (otpStatus !== 0) {
      dispatch(hideLoader());
    }

    if (otpStatus === 2) {
      Toast.show('You have successfuly logged in', Toast.LONG);
      navigation.goBack();
    }

    if (otpStatus === 3) {
      Toast.show('Error processing your request. Please try again', Toast.LONG);
      navigation.goBack();
    }
  }, [otpStatus]);

  const _otpVerifyContent = () => {
    return (
      <View style={styles.verifyContainer}>
        <Text style={styles.verifyInputHint}>Please enter OTP</Text>
        <View style={styles.verifyInputContainer}>
          <OTPInputView
            style={{width: '100%', height: 45}}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeChanged={code => {
              setVerificationCode(code);
            }}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <Button
          title="Verify OTP"
          onPress={() => verifyOTP()}
          buttonStyle={styles.sendOtpBtn}
          type="outline"
          raised
          titleStyle={styles.sendOtpBtnText}
          containerStyle={styles.sendOtpBtnContainer}
          disabled={verificationCode.length !== 6}
        />
      </View>
    );
  };

  const _sendOtpContent = () => {
    return (
      <View style={styles.otpContainer}>
        <PhoneInput
          containerStyle={styles.phoneInputContainer}
          ref={phoneInput}
          defaultValue={mobileNo}
          defaultCode="IN"
          layout="first"
          placeholder="Mobile Number"
          onChangeText={text => {
            setMobileNo(text);
          }}
          onChangeFormattedText={text => {
            setMobileNoWithCC(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        <Button
          title="Send OTP"
          onPress={() => sendOTP()}
          buttonStyle={styles.sendOtpBtn}
          type="outline"
          raised
          titleStyle={styles.sendOtpBtnText}
          containerStyle={styles.sendOtpBtnContainer}
        />
      </View>
    );
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/appIcon.png')}
        />
      </View>
      {otpStatus === 1 ? _otpVerifyContent() : _sendOtpContent()}
    </View>
  );
};

export default LoginScreen;
