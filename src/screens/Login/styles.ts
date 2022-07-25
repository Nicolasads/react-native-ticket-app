import styled from 'styled-components/native';

export const LoginContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  justify-content: center;
  padding: 0px 20px 0px;
`;

export const LoginTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 30px;
`;

export const LoginSubtitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.mediumGray};
`;

export const FormField = styled.View`
  margin-top: 66px;
  margin-bottom: 27px;
`;

export const LoginTouchable = styled.TouchableOpacity`
  margin-top: 140px;
`;

export const LoginTouchableText = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.mediumGray};
  text-align: center;
`;

export const LoginTouchableSpan = styled.Text`
  color: ${({theme}) => theme.primary};
`;

export const TopCircle = styled.View`
  width: 270px;
  height: 270px;
  border-radius: 270px;
  background-color: ${({theme}) => theme.primary};
  position: absolute;
  top: -100px;
  right: -130px;
  z-index: -1;
`;

export const Circle = styled.View`
  width: 270px;
  height: 270px;
  border-radius: 270px;
  background-color: ${({theme}) => theme.primary};
  position: absolute;
  bottom: -150px;
  left: -60px;
  z-index: -1;
`;
