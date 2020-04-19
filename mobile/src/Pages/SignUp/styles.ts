import {ViewStyle} from 'react-native';
import {ColorGuide} from '../../Utils/styleGuide';

interface SignUpStyles {
  bg: ViewStyle;
  logo: ViewStyle;
  form: ViewStyle;
}

export const SignUpStyle: SignUpStyles = {
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
