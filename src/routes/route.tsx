import React from 'react';
import TabRoutes from './tabRoutes';
import {createStackNavigator} from '@react-navigation/stack';
import EventInfo from '../screens/EventInfo';

export default function Route() {
  const Stack = createStackNavigator();

  const options = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="EventInfo" component={EventInfo} />
    </Stack.Navigator>
  );
}
