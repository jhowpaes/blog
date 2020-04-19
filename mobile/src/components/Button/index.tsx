import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FontGuide} from '../../Utils/styleGuide';
import {ButtonStyle as styles} from './styles';

interface Props {
  title: string;
  onPress?(): void;
}

const Button = ({title, onPress}: Props) => (
  <TouchableOpacity style={styles.holder} onPress={onPress}>
    <Text style={FontGuide.btnText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
