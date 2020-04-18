import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import PageScreen from './PageScreen';
import TabScreen from './TabScreen';

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabScreen /> : <PageScreen />}
    </NavigationContainer>
  );
};

export default Routes;
