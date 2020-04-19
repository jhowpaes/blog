import {ViewStyle} from 'react-native';

interface SignInStyles {
  bg: ViewStyle;
  content: ViewStyle;
}

export const SignInStyle: SignInStyles = {
  bg: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
};
