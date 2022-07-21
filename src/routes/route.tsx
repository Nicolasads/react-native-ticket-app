import React from 'react';
import TabRoutes from './tabRoutes';
import {createStackNavigator} from '@react-navigation/stack';

export default function Route() {
  const Stack = createStackNavigator();

  const options = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
    </Stack.Navigator>
  );
}
