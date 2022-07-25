import React from 'react';
import {
  ItemContainer,
  ItemDate,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemTitle,
} from './styles';
import {EventTypes} from '../../screens/Home';
import {formatPrice} from '../../utils/FormatPrice';

type ResultItemProps = {
  item: EventTypes;
  onPress: any;
};

export default function ResultItem({item, onPress}: ResultItemProps) {
  return (
    <ItemContainer onPress={onPress}>
      <ItemImage source={{uri: item.image}} />

      <ItemInfo>
        <ItemTitle numberOfLines={2}>{item.title}</ItemTitle>

        <ItemDate>26 Jul 2022 - 15:00</ItemDate>
        <ItemPrice>{formatPrice(item.price)}</ItemPrice>
      </ItemInfo>
    </ItemContainer>
  );
}
