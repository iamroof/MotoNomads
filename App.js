/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations';
import {Store} from './src/redux/store';
import {LogBox} from 'react-native';

const App: () => Node = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <Provider store={Store}>
      <AppNavigator></AppNavigator>
    </Provider>
  );
};

export default App;
