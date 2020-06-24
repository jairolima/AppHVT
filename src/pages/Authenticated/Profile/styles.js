// TODO colocar padding top + status bar height
// import {getStatusBarHeight} from 'react-native-status-bar-height';

import styled from 'styled-components/native';
import {Platform} from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Background = styled.View`
  height: 100%;
  width: 100%;
  background-color: #be1e2d;
`;

export const Form = styled.View`
  align-self: center;
  margin-top: 40px;
  width: 100%;
`;

export const FormInput = styled(Input)`
  margin-bottom: 16px;
`;

export const SubmitButton = styled(Button)`
  align-self: center;
  width: 100%;
`;
