import produce from 'immer';

const INITIAL_STATE = {
  jwt: null,
  isLoggedIn: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.jwt = action.payload.jwt;
        draft.isLoggedIn = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.isLoggedIn = action.payload.isLoggedIn;
        draft.loading = action.payload.loading;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.jwt = null;
        draft.isLoggedIn = false;
        break;
      }
      default:
    }
  });
}
