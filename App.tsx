import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import Route from './src/routes/route';
import {globalTheme} from './src/theme/globalTheme';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={globalTheme}>
        <Route />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
