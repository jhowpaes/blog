import React from 'react';
import {View} from 'react-native';
import Routes from './Core/Routes';
import {AppStyle as styles} from './styles';

const App = () => (
  <View style={styles.bg}>
    <Routes />
  </View>
);

export default App;
