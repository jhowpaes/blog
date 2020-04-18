import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

// import { Container } from './styles';

const Stack = createStackNavigator();

const PageScreen = () => {
  return (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </>
  );
};

export default PageScreen;
