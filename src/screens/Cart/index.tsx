import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useSelector} from 'react-redux';
import CartItem from '../../components/CartItem';
import CustomButton from '../../components/CustomButton';
import {getCartItems, getTotalValue} from '../../features/cart/cartSlice';
import {formatPrice} from '../../utils/FormatPrice';
import {EventTypes} from '../Home';
import {
  CartFooter,
  CartItems,
  CartTitle,
  Container,
  EmptyCart,
  EmptyTitle,
  TotalValue,
} from './styles';

import Feather from 'react-native-vector-icons/Feather';
import {globalTheme} from '../../theme/globalTheme';

export default function Cart() {
  const getItems: EventTypes[] = useSelector(getCartItems);
  const totalValue = useSelector(getTotalValue);

  const renderItem: ListRenderItem<EventTypes> = ({item}) => (
    <CartItem itemData={item} />
  );

  return (
    <Container>
      <CartTitle>Carrinho</CartTitle>

      <CartItems>
        <FlatList
          data={getItems}
          keyExtractor={(item: any) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={
            <EmptyCart>
              <Feather
                name="shopping-cart"
                size={80}
                color={globalTheme.lightGray}
              />
              <EmptyTitle>
                Seu carrinho está vazio, comece a fazer as compras!
              </EmptyTitle>
            </EmptyCart>
          }
        />
      </CartItems>

      {getItems.length !== 0 && (
        <CartFooter>
          <TotalValue>Valor total: {formatPrice(totalValue)} </TotalValue>

          <CustomButton title="Realizar pagamento" />
        </CartFooter>
      )}
    </Container>
  );
}
