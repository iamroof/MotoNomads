import React from 'react';
import {Text, View, Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';

const DashboardScreen = () => {
  const {authStatus} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  return (
    <SafeAreaProvider>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <Text>{authStatus}</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default DashboardScreen;
