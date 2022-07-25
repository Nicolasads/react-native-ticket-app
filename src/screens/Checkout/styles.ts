import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
`;

export const Content = styled.View`
  flex: 0.95;
  align-items: center;
  justify-content: center;
`;

export const CheckoutTitle = styled.Text`
  margin-top: 100px;
  font-family: ${({theme}) => theme.fontSemiBold};
  font-size: 16px;
`;

export const CheckoutFooter = styled.View`
  margin: 0px 20px 0px;
`;
