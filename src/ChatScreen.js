import React, {Component} from 'react';
import {
    Text, View,
} from 'react-native';


export default class ChosenScreen extends Component {

    render() {
        return (
            <View style={{flex:1, backgroundColor:this.props.bgColor}}>
                <Text>Chat</Text>
            </View>
        );
    }
}