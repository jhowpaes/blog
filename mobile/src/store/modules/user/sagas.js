import {Alert} from 'react-native';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {updateProfileFailure, updateProfileSuccess} from './actions';

export function* updateProfile({payload}) {
  try {
    const {userId, name, email, username} = payload.data;

    const profile = Object.assign({
      name,
      email,
      username,
    });

    const response = yield call(api.put, `users/${userId}`, profile);

    yield put(updateProfileSuccess(response.data));

    Alert.alert('Update success', 'Profile updated successfully');
  } catch (err) {
    Alert.alert('Update failed', 'Error updating profile');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
