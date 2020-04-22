import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import TextAreaInput from '../../../components/TextAreaInput';
import api from '../../../services/api';
import {CreateIdeaStyle as styles} from './styles';

interface Props {
  idea: string;
}

const CreateIdea = ({idea = null}) => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.profile);
  const [description, setDescription] = useState(
    idea !== null ? idea?.description : '',
  );

  const formSubmit = async () => {
    const request = await api.post('ideas', {
      description: description,
      user: user.id,
      date: new Date(),
    });

    console.log(request.data);
  };

  return (
    <SafeAreaView>
      <CustomHeader
        title={idea !== null ? 'Editar Ideia' : 'Cadastrar Ideia'}
      />
      <View style={styles.form}>
        <TextAreaInput
          placeholder="Descreva sua ideia"
          multiline
          maxLength={280}
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <Button title="Salvar" onPress={formSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default CreateIdea;
