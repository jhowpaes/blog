import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, KeyboardAvoidingView, View} from 'react-native';
import LOGO from '../../assets/img/logo.png';
import Button from '../../components/Button';
import IText from '../../components/Input';
import Link from '../../components/Link';
import {SignInStyle as styles} from './styles';

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.bg} behavior="padding">
      <View style={styles.logo}>
        <Image source={LOGO} />
      </View>
      <View style={styles.form}>
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

        <Button title="Acessar" onPress={() => {}} />

        <Link
          title="Cadastrar conta."
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
