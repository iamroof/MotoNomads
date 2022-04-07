import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ADMIN, DASHBOARD, USER_ACCOUNT} from '../constants/routeNames';
import DashboardScreen from '../screens/dashboard';
import AdminScreen from '../screens/admin';
import UserAccountScreen from '../screens/userAccount';

const BottomTabNavigator = () => {
  const TabNavigator = createMaterialBottomTabNavigator();
  return (
    <TabNavigator.Navigator
      initialRouteName={DASHBOARD}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
      <TabNavigator.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
      <TabNavigator.Screen
        name={ADMIN}
        component={AdminScreen}
        options={{
          tabBarLabel: 'Admin',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-hard-hat"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name={USER_ACCOUNT}
        component={UserAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
