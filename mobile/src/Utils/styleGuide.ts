import {TextStyle} from 'react-native';

interface FontGuides {
  title: TextStyle;
  span: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  p: TextStyle;
  textInput: TextStyle;
  btnText: TextStyle;
  btnTextLogout: TextStyle;
  linkText: TextStyle;
}

interface ColorGuides {
  error: string;
  success: string;
  primary: string;
  secondary: string;
  white: string;
  black: string;
}

export const FontGuide: FontGuides = {
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  span: {
    fontSize: 13,
    fontWeight: '400',
    color: '#b8b6b6',
  },
  h1: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333333',
  },
  h2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
  },
  h3: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
  },
  h4: {
    fontSize: 13,
    fontWeight: '400',
    color: '#333333',
  },
  h5: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333333',
  },
  p: {
    fontSize: 12,
    fontWeight: '300',
    color: '#333333',
  },
  textInput: {
    fontSize: 17,
    fontWeight: '400',
    color: '#333333',
    padding: 10,
  },
  btnText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#FFFFFF',
    padding: 10,
  },
  btnTextLogout: {
    fontSize: 17,
    fontWeight: '400',
    color: '#333333',
    padding: 10,
  },
  linkText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#FFFFFF',
  },
};

export const ColorGuide: ColorGuides = {
  error: '#ED1651',
  success: '#1ECA6B',
  primary: '#0567c9',
  secondary: '#fafcff',
  white: '#FFFFFF',
  black: '#333333',
};
