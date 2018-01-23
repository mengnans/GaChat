import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import BottomNavigation, {Tab} from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MomentScreen from './MomentScreen';
import ProfileScreen from './ProfileScreen.js';
import ChatScreen from './ChatScreen.js';
import HomeScreen from './HomeScreen.js';


export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabSelected: 0,
        }
    }

    handleTabChanged = (newTabIndex) => {
        this.setState({
            tabSelected: newTabIndex,
        });
    };

    render() {
        const tabColors = ['#37474F', '#00796B', '#5D4037', '#3E2723'];
        const screens = [HomeScreen,ChatScreen,MomentScreen,ProfileScreen];

        let UserChosenScreen = screens[this.state.tabSelected];
        let tabColor = tabColors[this.state.tabSelected];

        return (
            <View style={styles.container}>
                <View style={styles.main_screen}>
                    <UserChosenScreen style={styles.chosen_screen} bgColor={tabColor}/>
                </View>
                <BottomTabs
                    handleTabChanged={this.handleTabChanged.bind(this)}/>

            </View>
        );
    }
}

class BottomTabs extends Component {

    // do not re-render plz
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <BottomNavigation
                labelColor="white"
                rippleColor="white"
                style={styles.bottom_navigation}
                onTabChange={this.props.handleTabChanged}>
                <Tab
                    barBackgroundColor="#37474F"
                    label="Home"
                    icon={<Icon size={24} color="white" name="tv"/>}
                />
                <Tab
                    barBackgroundColor="#00796B"
                    label="Chat"
                    icon={<Icon size={24} color="white" name="music-note"/>}
                />
                <Tab
                    barBackgroundColor="#5D4037"
                    label="Zone"
                    icon={<Icon size={24} color="white" name="book"/>}
                />
                <Tab
                    barBackgroundColor="#3E2723"
                    label="Profile & Setting"
                    icon={<Icon size={24} color="white" name="person"/>}
                />
            </BottomNavigation>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    chosen_screen: {
        flex:1,
    },
    main_screen: {
        flex: 1,
        marginBottom: 56,
    },
    bottom_navigation: {
        height: 56,
        elevation: 8,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0
    },

});
