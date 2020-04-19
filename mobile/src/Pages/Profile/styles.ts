import {ViewStyle} from 'react-native';
import {ColorGuide} from '../../Utils/styleGuide';

interface ProfileStyles {
  bg: ViewStyle;
  content: ViewStyle;
  form: ViewStyle;
  separator: ViewStyle;
}

export const ProfileStyle: ProfileStyles = {
  bg: {
    flex: 1,
    backgroundColor: ColorGuide.white,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  form: {
    flex: 1,
    backgroundColor: ColorGuide.primary,
    padding: 10,
    borderRadius: 7,
  },
  separator: {
    backgroundColor: ColorGuide.white,
    height: 1,
    marginBottom: 15,
  },
};
