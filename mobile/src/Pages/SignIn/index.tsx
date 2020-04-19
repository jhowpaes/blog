import React from 'react';
import {Text, View} from 'react-native';
import {FontGuide} from '../../Utils/styleGuide';
import {SignInStyle as styles} from './styles';

const SignIn = () => {
  return (
    <View style={styles.bg}>
      <Text style={FontGuide.title}>SignIn</Text>
    </View>
  );
};

export default SignIn;
