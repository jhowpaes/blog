import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import IText from '../../components/Input';
import {ProfileStyle as styles} from './styles';

const Profile = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <CustomHeader title="Meus dados" />
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
        <View style={styles.separator} />
        <IText
          placeholder="Digite sua senha atual"
          autoCorrect={false}
          type="password"
          onChange={() => {}}
        />
        <IText
          placeholder="Digite sua nova senha"
          autoCorrect={false}
          type="password"
          onChange={() => {}}
        />
        <IText
          placeholder="Confirme sua nova senha"
          autoCorrect={false}
          type="password"
          onChange={() => {}}
        />

        <Button title="Atualizar" onPress={() => {}} />
        <Button title="Sair" onPress={() => {}} type="logout" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
