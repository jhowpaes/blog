import {ViewStyle} from 'react-native';
import {ColorGuide} from '../../Utils/styleGuide';

interface ProfileStyles {
  bg: ViewStyle;
  form: ViewStyle;
  separator: ViewStyle;
}

export const ProfileStyle: ProfileStyles = {
  bg: {
    flex: 1,
    backgroundColor: ColorGuide.secondary,
  },
  form: {
    height: '100%',
    backgroundColor: ColorGuide.primary,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  separator: {
    backgroundColor: ColorGuide.white,
    height: 1,
    marginBottom: 15,
  },
};
