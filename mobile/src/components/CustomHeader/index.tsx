import React from 'react';
import {Text, View} from 'react-native';
import {FontGuide} from '../../Utils/styleGuide';
import {CustomHeaderStyle as styles} from './styles';

interface Props {
  title: string;
}

const CustomHeader = ({title}: Props) => {
  return (
    <View style={styles.holder}>
      <Text style={FontGuide.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;
