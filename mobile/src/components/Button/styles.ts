import {ViewStyle} from 'react-native';

interface ButtonStyles {
  btnDefault: ViewStyle;
  btnLogout: ViewStyle;
}

export const ButtonStyle: ButtonStyles = {
  btnDefault: {
    marginVertical: 5,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  btnLogout: {
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
};
