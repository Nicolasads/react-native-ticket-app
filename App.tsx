import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import store from './src/features/store/store';
import Route from './src/routes/route';
import {globalTheme} from './src/theme/globalTheme';
import Toast from 'react-native-toast-message';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import LoadingScreen from './src/components/LoadingScreen';

const App = () => {
  let persistor = persistStore(store);

  return (
    <NavigationContainer>
      <ThemeProvider theme={globalTheme}>
        <Provider store={store}>
          <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <Route />
            <Toast />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
