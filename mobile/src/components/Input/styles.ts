import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 10px;
  height: 46px;
  background: #ffffff;
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#333333',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #333333;
`;
