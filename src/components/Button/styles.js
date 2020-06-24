import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 56px;
  background: #fff;
  width: 100%;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #be1e2d;
  font-weight: bold;
  font-size: 16px;
`;
