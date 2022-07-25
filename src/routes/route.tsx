import React from 'react';
import TabRoutes from './tabRoutes';
import {createStackNavigator} from '@react-navigation/stack';
import EventInfo from '../screens/EventInfo';
import Checkout from '../screens/Checkout';
import Login from '../screens/Login';
import Register from '../screens/Register';

export default function Route() {
  const Stack = createStackNavigator();

  const options = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="EventInfo" component={EventInfo} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
