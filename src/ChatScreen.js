import React, {Component} from 'react';
import {
    Text, View,
} from 'react-native';


export default class ChatScreen extends Component {

    render() {
        return (
            <View style={{flex:1, backgroundColor:this.props.bgColor}}>
                <Text>Chat</Text>
            </View>
        );
    }
}