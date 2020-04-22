import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import CardIdeas from '../../components/CardIdeas';
import CustomHeader from '../../components/CustomHeader';
import api from '../../services/api';
import {ColorGuide} from '../../Utils/styleGuide';
import {AddBtn, Container, Content, IdeasList} from './styles';

const Ideas = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.profile);
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    loadIdeas();
  }, []);

  const loadIdeas = async () => {
    try {
      const response = await api.get(`ideas?user.id=${user.id}`);
      const {data} = response;

      setIdeas(data);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        Alert.alert('Error', err.response.data.error);
      } else {
        Alert.alert('Error', 'Unknown error, please try again later.');
      }
    }
  };

  return (
    <Container>
      <CustomHeader title="Minhas Ideias" />
      <Content>
        <AddBtn
          onPress={() => {
            navigation.navigate('IdeaStack');
          }}>
          <Icon name="add-circle" size={30} color={ColorGuide.primary} />
        </AddBtn>

        <IdeasList
          data={ideas}
          keyExtractor={(item) => String(item)}
          renderItem={({item}) => <CardIdeas edit data={item} />}
        />
      </Content>
    </Container>
  );
};

export default Ideas;
