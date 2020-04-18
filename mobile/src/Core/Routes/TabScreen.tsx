import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Principal" component={HomeScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TabScreen;
