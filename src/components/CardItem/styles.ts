import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.TouchableOpacity`
  width: ${windowWidth / 2.5 + 'px'};
  margin-bottom: 10px;
`;

export const ImageContent = styled.Image`
  width: ${windowWidth / 2.5 + 'px'};
  height: 100px;
  border-radius: 8px;
`;

export const EventTitle = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.darkGray};
  text-align: left;
  width: ${windowWidth / 2.45 + 'px'};
  margin-top: 5px;
`;

export const EventDate = styled.Text`
  width: ${windowWidth / 2.45 + 'px'};
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.mediumGray};
  margin-top: 4px;
`;

export const EventPrice = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.primary};
  margin: 4px 0px 4px;
`;
