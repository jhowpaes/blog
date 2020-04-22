import {ViewStyle} from 'react-native';
import {ColorGuide} from '../../Utils/styleGuide';

interface CardIdeaStyles {
  container: ViewStyle;
  header: ViewStyle;
  bg: ViewStyle;
  content: ViewStyle;
}

export const CardIdeaStyle: CardIdeaStyles = {
  container: {
    borderRadius: 7,
    padding: 5,
    flexDirection: 'row',
  },
  bg: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingEnd: 28,
  },
  content: {
    backgroundColor: ColorGuide.white,
    borderWidth: 1,
    borderColor: ColorGuide.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    padding: 15,
  },
};
