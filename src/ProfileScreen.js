import React, {Component} from 'react';
import {
    Text, View,
} from 'react-native';


export default class ProfileScreen extends ChosenScreen {

    render() {
        return (
            <ProfileScreen>
                <Text>Profile</Text>
            </ProfileScreen>
        );
    }
}


class ChosenScreen extends Component {

    render() {
        return (
            <View style={{flex:1, backgroundColor:this.props.bgColor}}>
                {this.props.children}
            </View>
        );
    }
}