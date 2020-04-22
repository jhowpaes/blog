import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Image, KeyboardAvoidingView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import LOGO from '../../assets/img/logo.png';
import Button from '../../components/Button';
import IText from '../../components/Input';
import Link from '../../components/Link';
import {signInRequest} from '../../store/modules/auth/actions';
import {SignInStyle as styles} from './styles';

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = () => {
    dispatch(signInRequest(email, password));
  };

  return (
    <KeyboardAvoidingView style={styles.bg} behavior="padding">
      <View style={styles.logo}>
        <Image source={LOGO} />
      </View>
      <View style={styles.form}>
        <IText
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
        />
        <IText
          secureTextEntry
          placeholder="Digite sua senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={formSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <Button title="Acessar" onPress={formSubmit} />

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
