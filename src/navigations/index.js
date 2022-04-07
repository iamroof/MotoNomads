import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator></BottomTabNavigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
