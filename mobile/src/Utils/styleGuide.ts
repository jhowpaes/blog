import {TextStyle} from 'react-native';

interface styleGuides {
  title: TextStyle;
  span: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  p: TextStyle;
}

export const styleGuide: styleGuides = {
  title: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
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
};

export const colors = {
  error: '#ED1651',
  success: '#1ECA6B',
  primary: '#0567c9',
};
