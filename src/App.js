import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import LibraryList from './src/common/LibraryList';
import Router from './src/common/Router';

const App = () => {

    return (
      <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
      <Router />
      </View>
      </Provider>
    );
  }


export default App;
