import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import IText from '../../components/Input';
import {signOut} from '../../store/modules/auth/actions';
import {updateProfileRequest} from '../../store/modules/user/actions';
import {ProfileStyle as styles} from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);

  const emailRef = useRef();
  const usernameRef = useRef();

  const [userId, setUserId] = useState(user.id);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const formSubmit = () => {
    dispatch(updateProfileRequest({userId, name, email, username}));
  };

  const submitLogout = () => {
    dispatch(signOut());
  };

  return (
    <SafeAreaView style={styles.bg}>
      <CustomHeader title="Meus dados" />
      <View style={styles.form}>
        <IText
          placeholder="Digite seu nome"
          autoCorrect={false}
          ref={emailRef}
          autoCapitalize="none"
          returnKeyType="next"
          value={name}
          onChangeText={setName}
        />
        <IText
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCorrect={false}
          ref={usernameRef}
          autoCapitalize="none"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
        />
        <IText
          placeholder="Digite seu username"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          value={username}
          onChangeText={setUsername}
        />

        <Button title="Atualizar" onPress={formSubmit} />
        <Button title="Sair" onPress={submitLogout} type="logout" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
