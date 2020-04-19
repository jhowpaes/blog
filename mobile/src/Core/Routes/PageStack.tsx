import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StacksMap} from './StacksMap';

const Stack = createStackNavigator();

const PageStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      {StacksMap.pages.map((page) => (
        <Stack.Screen
          key={page.name}
          name={page.name}
          component={page.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default PageStack;
