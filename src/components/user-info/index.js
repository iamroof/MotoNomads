import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {Avatar, Button} from '@rneui/themed';
import styles from './style';
const UserInfo = ({authStatus, user, signIn}) => {
  useEffect(() => {
    console.log(authStatus);
  });
  const _userContent = () => {
    return (
      <View style={styles.userInfoContainer}>
        <View>
          <Avatar
            size={90}
            rounded
            icon={{
              name: 'snowboard',
              type: 'material-community',
              color: '#041E3F',
            }}
            containerStyle={styles.userImage}
          />
        </View>
        <View style={styles.userNumberContainer}>
          <Text style={styles.userNumber}>{user && user.phoneNumber}</Text>
        </View>
      </View>
    );
  };

  const _loginContent = () => {
    return (
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.loginHint}>
            Login to join us in the next trip!
          </Text>
        </View>
        <View>
          <Button
            title="Login with OTP"
            onPress={() => signIn()}
            buttonStyle={styles.loginBtn}
            type="outline"
            raised
            titleStyle={styles.loginBtnText}
            containerStyle={styles.loginBtnContainer}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {authStatus > 1 ? _userContent() : _loginContent()}
    </View>
  );
};

export default UserInfo;
