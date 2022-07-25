import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const ItemContainer = styled.TouchableOpacity`
  width: ${windowWidth - 30 + 'px'};
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ItemImage = styled.Image`
  width: 140px;
  height: 85px;
  border-radius: 8px;
`;

export const ItemInfo = styled.View`
  margin-left: 10px;
`;

export const ItemTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 16px;
  width: ${windowWidth - 190 + 'px'};
`;

export const ItemPrice = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.primary};
`;

export const ItemDate = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.mediumGray};
  margin-top: 10px;
`;
