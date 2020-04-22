import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 10px;
  height: 190px;
  background: #ffffff;
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#333333',
})`
  flex: 1;
  height: 190px;
  font-size: 15px;
  margin-left: 10px;
  color: #333333;
`;
