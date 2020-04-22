import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StacksMap} from '../StacksMap';

const AuthStack: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      {StacksMap.auth.map((page) => (
        <Stack.Screen
          key={page.name}
          name={page.name}
          component={page.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
