import {ViewStyle} from 'react-native';
import {ColorGuide} from '../../../Utils/styleGuide';

interface CreateIdeaStyle {
  bg: ViewStyle;
  fom: ViewStyle;
}

export const CreateIdeaStyle = {
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
};
