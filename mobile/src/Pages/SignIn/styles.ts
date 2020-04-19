import {ViewStyle} from 'react-native';
import {ColorGuide} from '../../Utils/styleGuide';

interface SignInStyles {
  bg: ViewStyle;
  logo: ViewStyle;
  form: ViewStyle;
}

export const SignInStyle: SignInStyles = {
  bg: {
    flex: 1,
    backgroundColor: ColorGuide.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
};
