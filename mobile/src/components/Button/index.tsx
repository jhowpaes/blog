import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FontGuide} from '../../Utils/styleGuide';
import {ButtonStyle as styles} from './styles';

interface Props {
  title: string;
  onPress?(): void;
  type?: 'default' | 'logout';
}

const Button = ({title, onPress, type = 'default'}: Props) => {
  return type === 'logout' ? (
    <TouchableOpacity style={styles.btnLogout} onPress={onPress}>
      <Text style={FontGuide.btnText}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.btnDefault} onPress={onPress}>
      <Text style={FontGuide.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
