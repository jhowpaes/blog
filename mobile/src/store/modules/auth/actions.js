export function signInRequest(identifier, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {identifier, password},
  };
}

export function signInSuccess(jwt, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {jwt, user},
  };
}

export function signUpRequest(name, username, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {name, username, email, password},
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
    payload: {loading: false, isLoggedIn: false},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
