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
import {TypeEvent} from '../../screens/EventInfo';
import {formatPrice} from '../../utils/FormatPrice';

import moment from 'moment';
import 'moment/min/locales';

export default function CartItem({itemData}: {itemData: TypeEvent}) {
  const formatDate = (date?: string) => {
    return moment(date).locale('pt-br').format('lll');
  };

  return (
    <Container>
      <ItemImage source={{uri: itemData.image}} />

      <ItemDivider>
        <ItemTitle numberOfLines={2}>{itemData.title}</ItemTitle>
        <ItemDate>{formatDate(itemData.startDate)}</ItemDate>
        <ItemPrice>{formatPrice(itemData.price)}</ItemPrice>
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
