import React, {Component} from 'react';
import {
    Text, View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './common/LibraryList';
import Router from './common/Router';


export default class ChatScreen extends Component {

    render() {
      return (
        <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
        <Router />
        </View>
        </Provider>
      );
    }
}
