import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ADMIN, DASHBOARD, MY_ACCOUNT} from '../models/constants';
import MyAccountNavigator from './my-account-navigator';
import DashboardNavigator from './tours-navigator';
import AdminNavigator from './admin-navigator';

import {useSelector} from 'react-redux';
const BottomTabNavigator = () => {
  const {userInfo} = useSelector(state => state.userReducer);

  const TabNavigator = createMaterialBottomTabNavigator();
  return (
    <TabNavigator.Navigator
      initialRouteName="Dashboard Navigator"
      activeColor="#041E3F"
      inactiveColor="#b3bbc5"
      barStyle={{backgroundColor: '#f7f7f7'}}>
      <TabNavigator.Screen
        name="Dashboard Navigator"
        component={DashboardNavigator}
        options={{
          tabBarLabel: DASHBOARD,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
      {userInfo &&
        (userInfo.phoneNumber === '+919940185833' ||
          userInfo.phoneNumber === '+919840144401' ||
          userInfo.phoneNumber === '+919751371934') && (
          <TabNavigator.Screen
            name="Admin Navigator"
            component={AdminNavigator}
            options={{
              tabBarLabel: ADMIN,
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="account-tie-hat"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        )}
      <TabNavigator.Screen
        name="My Account Navigator"
        component={MyAccountNavigator}
        options={{
          tabBarLabel: MY_ACCOUNT,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="snowboard" color={color} size={26} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
