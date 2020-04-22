import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FontGuide} from '../../Utils/styleGuide';
import {LinkStyle as styles} from './styles';

interface Props {
  title: string;
  onPress?(): void;
}

const Link = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.holder} onPress={onPress}>
      <Text style={FontGuide.linkText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;
