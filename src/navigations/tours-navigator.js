import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DASHBOARD} from '../models/constants';
import DashboardScreen from '../screens/dashboard';
import styles from '../styles/general.style';
const DashboardNavigator = () => {
  const ToursStack = createStackNavigator();
  return (
    <ToursStack.Navigator
      initialRouteName={DASHBOARD}
      screenOptions={{
        headerStyle: styles.navBar,
        headerTintColor: '#041E3F',
        headerTitleStyle: {},
      }}>
      <ToursStack.Screen
        name={DASHBOARD}
        component={DashboardScreen}></ToursStack.Screen>
    </ToursStack.Navigator>
  );
};

export default DashboardNavigator;
