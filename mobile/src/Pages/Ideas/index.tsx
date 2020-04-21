import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardIdeas from '../../components/CardIdeas';
import CustomHeader from '../../components/CustomHeader';
import {ColorGuide} from '../../Utils/styleGuide';
import {IdeasStyle as styles} from './styles';

const Ideas = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Minhas Ideias" />
      <ScrollView style={styles.content}>
        <TouchableOpacity
          style={styles.containerBtn}
          onPress={() => {
            navigation.navigate('IdeaStack');
          }}>
          <Icon name="add-circle" size={30} color={ColorGuide.primary} />
        </TouchableOpacity>

        <CardIdeas />
        <CardIdeas />
        <CardIdeas />
        <CardIdeas />
        <CardIdeas />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ideas;
