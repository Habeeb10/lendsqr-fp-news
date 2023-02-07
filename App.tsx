import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';
import React from 'react';
import Navigator from './src/navigation/CommonStackNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <Navigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
