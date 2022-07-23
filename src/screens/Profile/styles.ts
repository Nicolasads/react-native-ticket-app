import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
`;

export const ProfileTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 25px;
  margin: 20px;
`;

export const LogoutContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0px 30px 0px;
`;

export const LogoutDescription = styled.Text`
  margin: 15px 0px 15px;
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.lightGray};
`;
