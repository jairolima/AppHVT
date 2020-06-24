import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 0px;
  height: 56px;
  background: #fff;
  border-radius: 22px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#FFF',
  textAlign: 'center',
})`
  flex: 1;
  font-size: 15px;
  color: #fff;
`;
