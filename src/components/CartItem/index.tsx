import React from 'react';
import {
  ButtonLabel,
  Container,
  DecreaseButton,
  IncreaseButton,
  ItemDate,
  ItemDivider,
  ItemImage,
  ItemPrice,
  ItemQuantity,
  ItemTitle,
  QuantityDivider,
} from './styles';
import image from '../../assets/image/img1.png';

export default function CartItem() {
  return (
    <Container>
      <ItemImage source={image} />

      <ItemDivider>
        <ItemTitle numberOfLines={2}>
          Evento Google 2022: Grandes Revoluções
        </ItemTitle>
        <ItemDate>28 Jul 2022 - 14:00</ItemDate>
        <ItemPrice>R$ 34,99</ItemPrice>
      </ItemDivider>

      <QuantityDivider>
        <DecreaseButton>
          <ButtonLabel> - </ButtonLabel>
        </DecreaseButton>

        <ItemQuantity>1</ItemQuantity>

        <IncreaseButton>
          <ButtonLabel>+</ButtonLabel>
        </IncreaseButton>
      </QuantityDivider>
    </Container>
  );
}
