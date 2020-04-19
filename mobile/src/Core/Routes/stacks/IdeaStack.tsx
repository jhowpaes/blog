import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CreateIdea from '../../../Pages/Ideas/CreateIdea';

const IdeaStack: React.FC = () => {
  const Stack = createStackNavigator();
  const pagesIdeaStack = [{name: 'Nova Ideia', component: CreateIdea}];

  return (
    <Stack.Navigator>
      {pagesIdeaStack.map((page) => (
        <Stack.Screen
          key={page.name}
          name={page.name}
          component={page.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default IdeaStack;
