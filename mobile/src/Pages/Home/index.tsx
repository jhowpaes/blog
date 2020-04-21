import React from 'react';
import CardIdeas from '../../components/CardIdeas';
import {Container, Content} from './styles';

const Home = () => {
  return (
    <Container>
      <Content>
        <CardIdeas />
        <CardIdeas />
        <CardIdeas />
        <CardIdeas />
        <CardIdeas />
        <CardIdeas />
      </Content>
    </Container>
  );
};

export default Home;
