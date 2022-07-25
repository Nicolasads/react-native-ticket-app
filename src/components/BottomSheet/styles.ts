import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const ModalContainer = styled.View``;

export const EventFooter = styled.View`
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.border};
  height: 60px;
`;

export const TicketButton = styled.TouchableOpacity`
  width: ${windowWidth - 40 + 'px'};
  height: 45px;
  background-color: ${({theme}) => theme.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const TicketButtonLabel = styled.Text`
  color: ${({theme}) => theme.light};
  font-family: ${({theme}) => theme.fontBold};
`;

export const ModalContent = styled.View`
  padding-top: 20px;
`;

export const ModalTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.mediumGray};
  font-size: 16px;
  margin-left: 20px;
`;

export const Tickets = styled.View`
  margin-top: 15px;
  height: 250px;
`;

export const ModalFooter = styled.View`
  margin: 0px 20px 0px;
`;

export const TotalValue = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.mediumGray};
  font-size: 16px;
  text-align: right;
  margin-bottom: 10px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 80px;
  border-radius: 8px;
`;

export const ItemDivider = styled.View`
  margin-left: 5px;
`;

export const ItemTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  width: ${windowWidth - 150 + 'px'};
`;

export const ItemDate = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.darkGray};
  margin-top: 5px;
`;

export const ItemPrice = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.primary};
`;

export const QuantityDivider = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DecreaseButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.primary};
  border-radius: 8px;
`;

export const ItemQuantity = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  margin: 0px 6px 0px;
`;

export const IncreaseButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  background-color: ${({theme}) => theme.primary};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonLabel = styled.Text`
  font-family: ${({theme}) => theme.fontSemiBold};
  color: ${({theme}) => theme.light};
  font-size: 16px;
`;
