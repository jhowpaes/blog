import {ViewStyle} from 'react-native';
import {ColorGuide} from '../../Utils/styleGuide';

interface IdeasStyles {
  container: ViewStyle;
  content: ViewStyle;
  containerBtn: ViewStyle;
}

export const IdeasStyle: IdeasStyles = {
  container: {
    flex: 1,
    backgroundColor: ColorGuide.secondary,
  },
  content: {
    padding: 20,
  },
  containerBtn: {
    alignItems: 'flex-end',
  },
};
