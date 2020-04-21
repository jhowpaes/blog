import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import TextAreaInput from '../../../components/TextAreaInput';
import {CreateIdeaStyle as styles} from './styles';

interface Props {
  idea: string;
}

const CreateIdea = ({idea = null}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <CustomHeader
        title={idea !== null ? 'Editar Ideia' : 'Cadastrar Ideia'}
      />
      <View style={styles.form}>
        <TextAreaInput
          placeholder="Digite seu nome"
          autoCorrect={false}
          onChange={() => {}}
        />

        <Button title="Salvar" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default CreateIdea;
