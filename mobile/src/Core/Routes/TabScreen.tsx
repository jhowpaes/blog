import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../Pages/Home';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Principal" component={Home} />
      </Tab.Navigator>
    </>
  );
};

export default TabScreen;
