import React from 'react';
import {
  ItemContainer,
  ItemDate,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemTitle,
} from './styles';
import image from '../../assets/image/img1.png';

export default function ResultItem() {
  return (
    <ItemContainer>
      <ItemImage source={image} />

      <ItemInfo>
        <ItemTitle numberOfLines={2}>
          UI Event 2022: Conceitos de UI/UX para usuários
        </ItemTitle>

        <ItemDate>26 Jul 2022 - 15:00</ItemDate>
        <ItemPrice>R$ 24,99</ItemPrice>
      </ItemInfo>
    </ItemContainer>
  );
}
