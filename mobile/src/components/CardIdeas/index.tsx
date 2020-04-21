import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ColorGuide, FontGuide} from '../../Utils/styleGuide';
import {CardIdeaStyle as styles} from './styles';

const CardIdea = () => {
  return (
    <View style={styles.container}>
      <Icon name="lightbulb" size={25} color={ColorGuide.primary} />
      <View style={styles.bg}>
        <View style={styles.header}>
          <Text style={FontGuide.h3}>Nome do autor</Text>
          <Text style={FontGuide.span}>hoje</Text>
        </View>
        <View style={styles.content}>
          <Text style={FontGuide.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in volupt
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardIdea;
