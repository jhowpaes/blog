import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import CardIdeas from '../../components/CardIdeas';
import api from '../../services/api';
import {Container, Content, IdeasList} from './styles';

const Home = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    loadIdeas();
  }, []);

  const loadIdeas = async () => {
    try {
      const response = await api.get('ideas');
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
      <Content>
        <IdeasList
          data={ideas}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <CardIdeas data={item} />}
        />
      </Content>
    </Container>
  );
};

export default Home;
