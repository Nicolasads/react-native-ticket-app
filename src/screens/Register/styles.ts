import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  padding: 0px 20px 0px;
`;

export const RegisterHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const BackButton = styled.TouchableOpacity``;

export const RegisterTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 28px;
  margin-left: 10px;
`;

export const RegisterForm = styled.View`
  margin-top: 45px;
`;

export const RegisterSubtitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.mediumGray};
  text-align: center;
  margin-bottom: 30px;
`;

export const ButtonField = styled.View`
  margin-top: 10px;
`;

export const ErrorText = styled.Text`
  margin-bottom: 15px;
  font-family: ${({theme}) => theme.fontMedium};
  color: ${({theme}) => theme.danger};
  font-size: 12px;
`;
