import styled from 'styled-components/native';

export const Container = styled.View`
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
  width: 200px;
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
