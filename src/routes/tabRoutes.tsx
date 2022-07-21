import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function TabRoutes() {
  const Tab = createBottomTabNavigator();

  const iconSize = 25;

  const tabOptions = {
    headerShown: false,
  };

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={tabOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="home" size={iconSize} color={color} />
          ),
          title: 'Início',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="shopping-cart" size={iconSize} color={color} />
          ),
          title: 'Carrinho',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" size={iconSize} color={color} />
          ),
          title: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
}
