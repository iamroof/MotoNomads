import React from 'react';
import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ListItem} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableHighlight} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import UserInfo from '../../components/user-info';
import {LOGIN} from '../../models/constants';
import {setOTPStatus, logout} from '../../redux/actions/user.actions';

const MyAccountScreen = ({navigation}) => {
  const {authStatus, userInfo} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(setOTPStatus(0));
    navigation.navigate(LOGIN);
  };

  const userLogout = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <UserInfo
          authStatus={authStatus}
          user={userInfo}
          signIn={login}></UserInfo>
        <ListItem
          Component={TouchableHighlight}
          containerStyle={{}}
          disabledStyle={{opacity: 0.5}}
          onPress={() => console.log('Contact Us')}
          pad={20}
          bottomDivider={true}>
          <MaterialCommunityIcons
            name="connection"
            color={'#041E3F'}
            size={24}
          />
          <ListItem.Content>
            <ListItem.Title>
              <Text>Contact Us</Text>
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem
          Component={TouchableHighlight}
          containerStyle={{}}
          disabledStyle={{opacity: 0.5}}
          onPress={() => console.log('Privacy Policy')}
          pad={20}
          bottomDivider={true}>
          <MaterialCommunityIcons
            name="book-open"
            color={'#041E3F'}
            size={24}
          />
          <ListItem.Content>
            <ListItem.Title>
              <Text>Privacy Policy</Text>
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem
          Component={TouchableHighlight}
          containerStyle={{}}
          disabledStyle={{opacity: 0.5}}
          onPress={() => console.log('About')}
          pad={20}
          bottomDivider={true}>
          <MaterialCommunityIcons
            name="information"
            color={'#041E3F'}
            size={24}
          />
          <ListItem.Content>
            <ListItem.Title>
              <Text>About</Text>
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        {authStatus && authStatus > 1 ? (
          <ListItem
            Component={TouchableHighlight}
            containerStyle={{}}
            disabledStyle={{opacity: 0.5}}
            onPress={userLogout}
            pad={20}
            bottomDivider={true}>
            <MaterialCommunityIcons name="logout" color={'#041E3F'} size={24} />
            <ListItem.Content>
              <ListItem.Title>
                <Text>Logout</Text>
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ) : null}
      </View>
    </SafeAreaProvider>
  );
};

export default MyAccountScreen;
