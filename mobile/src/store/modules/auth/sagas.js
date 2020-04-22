import {Alert} from 'react-native';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {signFailure, signInSuccess, signUpSuccess} from './actions';

export function* signIn({payload}) {
  try {
    const {identifier, password} = payload;

    const response = yield call(api.post, 'auth/local', {
      identifier,
      password,
    });

    const {jwt, user} = response.data;

    api.defaults.headers.Authorization = `Bearer ${jwt}`;

    yield put(signInSuccess(jwt, user));
  } catch (err) {
    Alert.alert('Auth failed', 'Failed authentication, reset your data.');
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, username, email, password} = payload;

    yield call(api.post, 'auth/local/register', {
      name,
      username,
      email,
      password,
    });

    yield put(signUpSuccess());
  } catch (err) {
    Alert.alert('Register failed', 'Failed register, reset your data.');
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {jwt} = payload.auth;

  if (jwt) {
    api.defaults.headers.Authorization = `Bearer ${jwt}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
