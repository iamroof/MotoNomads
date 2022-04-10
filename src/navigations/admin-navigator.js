import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ADMIN} from '../models/constants';
import AdminScreen from '../screens/admin';
import styles from '../styles/general.style';
const AdminNavigator = () => {
  const ToursStack = createStackNavigator();
  return (
    <ToursStack.Navigator
      initialRouteName={ADMIN}
      screenOptions={{
        headerStyle: styles.navBar,
        headerTintColor: '#041E3F',
        headerTitleStyle: {},
      }}>
      <ToursStack.Screen
        name={ADMIN}
        component={AdminScreen}></ToursStack.Screen>
    </ToursStack.Navigator>
  );
};

export default AdminNavigator;
