import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import PixelRatio from "react-native/Libraries/Utilities/PixelRatio";


export default class Moment extends Component {

    render() {

        return (
            <View style={styles.moment_container}>
                <Text style={styles.moment_header}>
                    <Image
                        resizeMode={'contain'}
                        style={{width: 45, height: 45}}
                        source={require('../assets/images/dog.jpg')}
                    />
                    {this.props.row.item.userName}
                </Text>
                <Text style={styles.moment}>
                    {'data:' + this.props.row.item.content}

                </Text>
            </View>

        );
    }

}


const styles = StyleSheet.create({

    moment: {
        backgroundColor: 'white',
    },

    moment_header: {
        height: 45,
        alignItems: 'center',
        fontSize: 22,
        backgroundColor: 'black',

    },



    moment_container: {
        backgroundColor: 'white',
        padding: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },


});