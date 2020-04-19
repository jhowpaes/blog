import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, KeyboardAvoidingView, View} from 'react-native';
import LOGO from '../../assets/img/logo.png';
import Button from '../../components/Button';
import IText from '../../components/Input';
import Link from '../../components/Link';
import {SignUpStyle as styles} from './styles';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.bg} behavior="padding">
      <View style={styles.logo}>
        <Image source={LOGO} />
      </View>
      <View style={styles.form}>
        <IText
          placeholder="Digite seu nome"
          autoCorrect={false}
          onChange={() => {}}
        />
        <IText
          placeholder="Digite seu e-mail"
          autoCorrect={false}
          onChange={() => {}}
        />
        <IText
          placeholder="Digite sua senha"
          autoCorrect={false}
          type="password"
          onChange={() => {}}
        />

        <Button title="Registrar" onPress={() => {}} />

        <Link
          title="Já possuo conta cadastrada."
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
