import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StacksMap} from '../StacksMap';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      {StacksMap.tabs.map((page) => (
        <Tab.Screen
          key={page.name}
          name={page.name}
          component={page.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabStack;
