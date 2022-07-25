import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';
import {persistReducer} from 'redux-persist';
import authReducer from '../auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistorReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistorReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof reducers>;

export default store;
