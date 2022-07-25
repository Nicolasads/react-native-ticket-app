import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
`;

export const CartTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  font-size: 25px;
  color: ${({theme}) => theme.darkGray};
  margin: 20px;
`;

export const CartItems = styled.View`
  margin: 20px 15px 10px;
  flex: 0.85;
`;

export const CartFooter = styled.View`
  margin: 0px 20px 0px;
  flex: 0.15;
`;

export const TotalValue = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 16px;
  text-align: right;
  margin-bottom: 10px;
`;

export const EmptyCart = styled.View`
  align-items: center;
  justify-content: center;
  height: 600px;
`;

export const EmptyTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.lightGray};
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
`;
