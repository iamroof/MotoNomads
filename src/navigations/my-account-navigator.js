import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, MY_ACCOUNT} from '../models/constants';
import LoginScreen from '../screens/login';
import MyAccountScreen from '../screens/my-account';
import styles from '../styles/general.style';
const MyAccountNavigator = () => {
  const MyAccountStack = createStackNavigator();
  return (
    <MyAccountStack.Navigator
      initialRouteName={MY_ACCOUNT}
      screenOptions={{
        headerStyle: styles.navBar,
        headerTintColor: '#041E3F',
        headerTitleStyle: {},
      }}>
      <MyAccountStack.Screen
        name={MY_ACCOUNT}
        component={MyAccountScreen}></MyAccountStack.Screen>
      <MyAccountStack.Screen
        name={LOGIN}
        component={LoginScreen}></MyAccountStack.Screen>
    </MyAccountStack.Navigator>
  );
};

export default MyAccountNavigator;
