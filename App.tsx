import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import store from './src/features/store/store';
import Route from './src/routes/route';
import {globalTheme} from './src/theme/globalTheme';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={globalTheme}>
        <Provider store={store}>
          <Route />
          <Toast />
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
