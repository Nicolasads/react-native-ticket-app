import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import {RootState} from '../store/store';

export interface Cart {
  id: number;
  title: string;
  startDate: string;
  enDate?: string;
  image: string;
  description?: string;
  price: number;
  quantity: number;
}

interface CartSliceState {
  cartItems: Cart[];
}

const initialState: CartSliceState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      const itemIndex = state.cartItems.findIndex(
        (item: Cart) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const product = {...action.payload, quantity: 1};
        state.cartItems.push(product);
      }
    },
    removeFromCart: (state, action: PayloadAction<Cart>) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id,
      );

      Toast.show({
        type: 'success',
        text1: 'Removido',
        text2: 'Ingresso removido do carrinho.',
        position: 'top',
      });
    },
    decreaseQuantity: (state, action: PayloadAction<Cart>) => {
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload.id,
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

export const getCartItems = (state: RootState) => state.cart.cartItems;

export const getTotalValue = (state: RootState) => {
  return state.cart.cartItems.reduce((total: number, cartItem: Cart) => {
    return cartItem.price * cartItem.quantity + total;
  }, 0);
};

export const {addToCart, removeFromCart, decreaseQuantity, clearCart} =
  cartSlice.actions;

export default cartSlice.reducer;
