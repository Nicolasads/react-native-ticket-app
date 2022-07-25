import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../../components/CartItem';
import CustomButton from '../../components/CustomButton';
import {
  clearCart,
  getCartItems,
  getTotalValue,
} from '../../features/cart/cartSlice';
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
import {useNavigation} from '@react-navigation/native';

export default function Cart() {
  const navigation = useNavigation();

  const getItems: EventTypes[] = useSelector(getCartItems);
  const totalValue = useSelector(getTotalValue);

  const dispatch = useDispatch();

  const renderItem: ListRenderItem<EventTypes> = ({item}) => (
    <CartItem itemData={item} />
  );

  const handleCheckout = () => {
    navigation.navigate('Checkout' as never);

    setTimeout(() => {
      dispatch(clearCart());
    }, 1000);
  };

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

          <CustomButton onPress={handleCheckout} title="Realizar pagamento" />
        </CartFooter>
      )}
    </Container>
  );
}
