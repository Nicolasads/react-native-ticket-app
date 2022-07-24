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
  align-items: center;
  margin-top: 15px;
  height: 230px;
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
