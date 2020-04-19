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
  linkText: TextStyle;
}

export const FontGuide: FontGuides = {
  title: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  span: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  h1: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  h2: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  h3: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  h4: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  h5: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  p: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  textInput: {
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
    padding: 10,
  },
  btnText: {
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: '400',
    color: '#FFFFFF',
    padding: 10,
  },
  linkText: {
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: '400',
    color: '#FFFFFF',
  },
};

export const ColorGuide = {
  error: '#ED1651',
  success: '#1ECA6B',
  primary: '#0567c9',
  white: '#FFFFFF',
  black: '#000000',
};
