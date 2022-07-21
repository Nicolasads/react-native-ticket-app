import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Route from './src/routes/route';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;
