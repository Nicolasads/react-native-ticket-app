import React from 'react';
import {Alert} from 'react-native';
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
import {formatPrice} from '../../utils/FormatPrice';

import Feather from 'react-native-vector-icons/Feather';

import moment from 'moment';
import 'moment/min/locales';

import {useDispatch} from 'react-redux';
import {
  addToCart,
  Cart,
  decreaseQuantity,
  removeFromCart,
} from '../../features/cart/cartSlice';
import {globalTheme} from '../../theme/globalTheme';

export default function CartItem({itemData}: {itemData: Cart}) {
  const dispatch = useDispatch();

  const formatDate = (date?: string) => {
    return moment(date).locale('pt-br').format('lll');
  };

  const handleIncrease = () => {
    dispatch(addToCart(itemData));
  };

  const handleDecrease = () => {
    if (itemData.quantity > 1) {
      dispatch(decreaseQuantity(itemData));
    } else if (itemData.quantity === 1) {
      Alert.alert(
        'Remover Ingresso',
        'Deseja remover o ingresso do carrinho?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {text: 'Remover', onPress: () => dispatch(removeFromCart(itemData))},
        ],
      );
    }
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
        <DecreaseButton onPress={handleDecrease}>
          {itemData.quantity === 1 ? (
            <Feather name="trash" size={16} color={globalTheme.light} />
          ) : (
            <ButtonLabel> - </ButtonLabel>
          )}
        </DecreaseButton>

        <ItemQuantity>{itemData.quantity}</ItemQuantity>

        <IncreaseButton onPress={handleIncrease}>
          <ButtonLabel>+</ButtonLabel>
        </IncreaseButton>
      </QuantityDivider>
    </Container>
  );
}
