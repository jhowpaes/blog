import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import PageStack from './PageStack';
import AuthStack from './stacks/AuthStack';

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? <PageStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
