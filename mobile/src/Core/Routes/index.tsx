import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import PageStack from './PageStack';
import AuthStack from './stacks/AuthStack';

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? <PageStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
