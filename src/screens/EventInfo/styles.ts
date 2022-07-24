import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0px 12px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.border};
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  margin-left: 12px;
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.mediumGray};
  font-size: 16px;
`;

export const Scrollable = styled.ScrollView``;

export const EventImage = styled.Image`
  width: ${windowWidth + 'px'};
  height: 170px;
`;

export const Info = styled.View`
  flex: 1;
  margin: 18px 20px 10px;
`;

export const EventTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 18px;
  margin-bottom: 15px;
`;

export const EventDate = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.mediumGray};
`;

export const EventType = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.mediumGray};
`;

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const DescriptionLabel = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  margin-top: 30px;
  font-size: 16px;
`;

export const Description = styled.Text`
  margin-top: 12px;
  font-family: ${({theme}) => theme.fontRegular};
  color: ${({theme}) => theme.mediumGray};
  text-align: left;
`;
