import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: 0 0px;
  width: 100%;
`;

export const Top = styled.View`
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
  background-color: rgba(190, 30, 45, 1);
`;

export const Points = styled.View`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
`;

export const Hr = styled.View`
  margin-top: 5px;
  height: 1px;
  width: 100%;
  background-color: #ccc;
`;

export const TitleRow = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const More = styled.TouchableOpacity`
  margin-right: 20px;
  align-items: flex-end;
`;

export const CarouselView = styled.View`
  flex: 1;
  margin-top: 5px;
  background-color: transparent;
  height: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const Card = styled.View`
  height: 180px;
  width: 160px;
  background-color: #fff;
  border-radius: 10px;
  margin-horizontal: 10px;
  margin-vertical: 10px;
  padding-vertical: 10px;
  align-items: center;
  justify-content: space-between;
`;
