import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './src/LoginScreen.js';
import MainScreen from './src/MainScreen.js';

const AppContent = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            headerMode: 'screen',
            header: null,
        },
    },
    MainScreen: {
        screen: MainScreen,

        navigationOptions: {
            headerMode: 'screen',
            header: null,
        },
    },
});

export default class App extends Component {
    render() {

        return (

            <View style={styles.container}>
                <View style={styles.status_bar}/>
                <AppContent/>
            </View>

        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    status_bar: {
        backgroundColor: 'white',
        ...Platform.select({
            android: {
                height: StatusBar.currentHeight
            },
            ios: {
                height: 20,
            }
        }),
    },
});
