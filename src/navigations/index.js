import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './bottom-tab-navigator';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {
  loginAsAnonymous,
  updateAuthStatus,
  updateUserInfo,
} from '../redux/actions/user.actions';
import {AuthType} from '../models/model';
import Loader from '../components/loader';

const AppNavigator = () => {
  const {loader} = useSelector(state => state.appReducer);

  const dispatch = useDispatch();

  const onAuthStateChanged = user => {
    if (user) {
      const status = user.isAnonymous ? AuthType.ANONYMOUS : AuthType.USER;
      console.log('User info updated', user);
      dispatch(updateAuthStatus(status));
      dispatch(updateUserInfo(user));
    } else {
      console.log('User info updated null', user);
      dispatch(updateAuthStatus(AuthType.UNAUTHORIZED));
      dispatch(updateUserInfo(null));
      dispatch(loginAsAnonymous());
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Loader show={loader.show}></Loader>
      <BottomTabNavigator></BottomTabNavigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
