import React, {Component} from 'react';
import {
    Text, View,
} from 'react-native';


export default class ProfileScreen extends Component {

    render() {
        return (
            <View style={{flex:1, backgroundColor:this.props.bgColor}}>
                <Text>Profile</Text>
            </View>
        );
    }
}