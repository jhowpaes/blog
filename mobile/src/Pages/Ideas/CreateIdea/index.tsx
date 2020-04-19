import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

// import { Container } from './styles';

const CreateIdea = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Cadastrar Ideas</Text>
    </View>
  );
};

export default CreateIdea;
