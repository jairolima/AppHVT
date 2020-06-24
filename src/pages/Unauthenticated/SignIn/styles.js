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
  padding: 0 20px;
  background-color: 'rgba(190, 30, 45, 0.85)';
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-top: 60px;
  padding-horizontal: 30px;
`;

export const Form = styled.View`
  align-self: center;
  width: 100%;
`;

export const FormInput = styled(Input)`
  margin-bottom: 16px;
`;

export const SubmitButton = styled(Button)`
  align-self: center;
  width: 100%;
`;

export const SignupButton = styled(Button)`
  align-self: center;
  margin-bottom: 10px;
  width: 85%;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  align-self: center;
`;
