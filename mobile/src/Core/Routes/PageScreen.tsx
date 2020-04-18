import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SignIn from '../../Pages/SignIn';

const Stack = createStackNavigator();

const PageScreen = () => {
  return (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </>
  );
};

export default PageScreen;
