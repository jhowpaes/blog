import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Image, KeyboardAvoidingView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import LOGO from '../../assets/img/logo.png';
import Button from '../../components/Button';
import IText from '../../components/Input';
import Link from '../../components/Link';
import {signUpRequest} from '../../store/modules/auth/actions';
import {SignUpStyle as styles} from './styles';

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = () => {
    dispatch(signUpRequest(name, username, email, password));
  };

  return (
    <KeyboardAvoidingView style={styles.bg} behavior="padding">
      <View style={styles.logo}>
        <Image source={LOGO} />
      </View>
      <View style={styles.form}>
        <IText
          placeholder="Digite seu nome"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          value={name}
          onChangeText={setName}
        />
        <IText
          placeholder="Digite seu username"
          ref={usernameRef}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          value={username}
          onChangeText={setUsername}
        />
        <IText
          placeholder="Digite seu e-mail"
          ref={emailRef}
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

        <Button title="Registrar" onPress={formSubmit} />

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
