import React, {Component} from 'react';
import {
    Text, View, StyleSheet, Image, ScrollView
} from 'react-native';


export default class ProfileScreen extends Component {
    render() {
        return (
            <View className="container" style={Styles.container}>
                <View style={StyleUserInfoArea.container}>
                    <View style={StyleUserInfoArea.iconArea}>
                        {/*<Image style={StyleUserInfoArea.iconItem}></Image>*/}
                        <Text style={StyleUserInfoArea.iconItem}>123</Text>
                    </View>
                    <View style={StyleUserInfoArea.userInfoArea}>
                        <Text style={StyleUserInfoArea.iconItem}>123</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF",

    },
});
const StyleUserInfoArea = StyleSheet.create({
    container: {
        backgroundColor: "#FF0000",
        alignSelf: "stretch",
        height: 120,
        flexDirection: "row",
    },
    iconArea: {
        left: 0,
        top: 0,
        backgroundColor: "#FFFF00",
        width: 120,
        height: 120,
    },
    userInfoArea: {
        flex: 1,
        backgroundColor: "#FF00FF",
    },
    iconItem: {},
    userNameArea: {
        left: 140,
        top: 10,

        backgroundColor: "#FFFF00",
        alignSelf: "stretch",
        height: 400,
    },
    userNameItem: {},
});