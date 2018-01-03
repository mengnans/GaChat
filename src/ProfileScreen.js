import React, {Component} from 'react';
import {
    Text, View, StyleSheet, Image, ScrollView
} from 'react-native';

import StylesMain from './ProfileScreenStyle.js'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View className="container" style={StylesMain.container}>
                <View style={StylesMain.container}>
                    <View style={StylesMain.content}>
                        {/*<Image style={StyleUserInfoArea.iconItem}></Image>*/}
                        <Text>123</Text>
                    </View>
                </View>
            </View>
        );
    }
}
//
// const StylesUserInfo = StyleSheet.create({
//     container: {
//         backgroundColor: "#FF0000",
//         alignSelf: "stretch",
//         height: 120,
//         flexDirection: "row",
//     },
//     iconArea: {
//         left: 0,
//         top: 0,
//         backgroundColor: "#FFFF00",
//         width: 120,
//         height: 120,
//     },
//     userInfoArea: {
//         flex: 1,
//         backgroundColor: "#FF00FF",
//     },
//     iconItem: {},
//     userNameArea: {
//         left: 140,
//         top: 10,
//
//         backgroundColor: "#FFFF00",
//         alignSelf: "stretch",
//         height: 400,
//     },
//     userNameItem: {},
// });