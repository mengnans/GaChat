import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    Keyboard, Dimensions,

} from 'react-native';

import md5 from "react-native-md5";

export default class HomeScreen extends Component {

    render() {
        return (
            <Text>
                Home
            </Text>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66cbff',
    },
    img: {
        width: 30,
        height: 30,
    },
    input: {
        width: 200,
        height: 40,
        color: '#fff',

    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    btText: {
        color: '#fff',
    }
});
