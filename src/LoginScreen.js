import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    Keyboard,

} from 'react-native';

import md5 from "react-native-md5";
import { Font } from 'expo';

export default class LoginScreen extends Component {
    userName = '';
    userPwd = '';

    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }

    // async load the font
    async componentDidMount() {
        await Font.loadAsync({
            'gloria-halleujah': require('../assets/fonts/GloriaHallelujah.ttf'),
        });

        this.setState({ fontLoaded: true });
    }


    login = () => {
        // hide the keyboard
        Keyboard.dismiss();

        // go to home screen
        this.props.navigation.navigate('MainScreen');

        // const HOSTANDPORT = 'http://192.168.191.1:8081';
        // const REQUEST_URL = HOSTANDPORT + '/login?userName='
        // + this.userName + '&userPwd=' + this.userPwd;
        // console.log(REQUEST_URL);
        //
        // let request = new XMLHttpRequest();
        // request.onreadystatechange = (e) => {
        //     if (request.readyState !== 4) {
        //         return;
        //     }
        //
        //     if (request.status === 200) {
        //         let response = request.responseText
        //         console.log(response);
        //         response = JSON.parse(response);
        //         let id = response.id;
        //
        //         // login success
        //         if(id != null){
        //             Keyboard.dismiss();
        //             // go to home screen
        //             this.props.navigation.navigate('MainScreen');
        //         }
        //         // login failed
        //         else {
        //             let errorMsg = response.errorMsg;
        //
        //             if (Platform.OS === 'android') {
        //                 ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
        //             } else if (Platform.OS === 'ios') {
        //                 alert(errorMsg);
        //             }
        //         }
        //     } else {
        //         console.warn('error!');
        //     }
        // };
        // request.open('GET', REQUEST_URL);
        // request.send();
    };

    onUsernameChanged = (newUsername) => {
        if (Platform)
            console.log('username:' + newUsername);
        this.userName = newUsername;
    };

    onUserPwdChanged = (newPassword) => {
        this.userPwd = md5.hex_md5(newPassword);
        console.log('userPwd' + this.userPwd);
    };

    render() {


        let inputStyles = [];
        let btTextStyles = [];
        inputStyles[0] = styles.input;
        btTextStyles[0] = styles.btText;

        if(this.state.fontLoaded){
            inputStyles[1] = styles.input_with_font;
            btTextStyles[1] = styles.btText_with_font;
        }

        return (
            <View
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <Image
                        source={require('../assets/icons/username.png')}
                        style={styles.img}/>
                    <TextInput
                        style={inputStyles}
                        onChangeText={this.onUsernameChanged}
                        placeholderTextColor={'#fff'}
                        placeholder={'username'}
                        underlineColorAndroid={'transparent'}
                    />

                </View>
                <View
                    style={styles.inputBox}>
                    <Image
                        source={require('../assets/icons/pwd.png')}
                        style={styles.img}/>
                    <TextInput
                        style={inputStyles}
                        onChangeText={this.onUserPwdChanged}
                        secureTextEntry={true}
                        placeholderTextColor={'#fff'}
                        placeholder={'password'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.login}>
                    <Text
                        style={btTextStyles}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                    <Text
                        style={btTextStyles}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282525',
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
    input_with_font:{
        fontFamily: 'gloria-halleujah',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#d33737',
        marginBottom: 8,
    },

    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#d33737',
        marginBottom: 8,
    },
    btText: {
        color: '#fff',
    },
    btText_with_font: {
        fontFamily: 'gloria-halleujah',
    }
});
