import React from 'react';
import CartItem from '../../components/CartItem';
import CustomButton from '../../components/CustomButton';
import {
  CartFooter,
  CartItems,
  CartTitle,
  Container,
  TotalValue,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <CartTitle>Carrinho</CartTitle>

      <CartItems>
        <CartItem />
      </CartItems>

      <CartFooter>
        <TotalValue>Valor total: R$ 174,94 </TotalValue>

        <CustomButton title="Realizar pagamento" />
      </CartFooter>
    </Container>
  );
}
