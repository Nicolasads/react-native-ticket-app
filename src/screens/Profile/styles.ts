import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

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

export const ProfileContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0px 20px 0px;
`;

export const ProfileImage = styled.Image`
  width: 142px;
  height: 142px;
  border-radius: 142px;
`;

export const ProfileName = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 18px;
  margin-top: 18px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.light};
  margin-top: 42px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px 0px;
`;

export const LogoutInfo = styled.View`
  width: ${windowWidth - 125 + 'px'};
  height: 55px;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

export const LogoutButtonText = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 16px;
`;

export const LogoutButtonSubtitle = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.lightGray};
  font-size: 12px;
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
