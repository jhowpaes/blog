import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// import { Container } from './styles';

const Ideas = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Minhas ideias</Text>
      <Button
        title="Cadastrar"
        onPress={() => {
          navigation.navigate('IdeaStack');
        }}
      />
    </SafeAreaView>
  );
};

export default Ideas;
