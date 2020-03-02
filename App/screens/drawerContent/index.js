import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Buttons from '../../components/drawer'


export default class DrawerContent extends Component {
    render() {
        return (
            <View style={styles.DC}>
                <View style={styles.container}>
                    <Text style={styles.txtSett} >Settings</Text>
                    {Buttons(() => this.props.navigation.navigate('MainScreen'), "home", "Return to HomeScreen")}
                    {Buttons(null, "flare", "Geolocation")}
                    {Buttons(null, "home", "Return to HomeScreen")}
                    {Buttons(null, "add-location", "Temperature")}
                    {Buttons(null, "lock", "Lock")}
                    {Buttons(null, "notifications", "Notifications")}
                    {Buttons(null, "airplay", "Background")}
                    {Buttons(null, "map", "Weather-Map")}
                    {Buttons(null, "widgets", "Widgets")}
                    {Buttons(null, "contact-mail", "Tell about problem")}
                    {Buttons(null, "message", "Contact us")}
                    {Buttons(() => this.props.navigation.navigate('LoginScreen'), "all-out", "Log Out")}
                </View>
            </View >
        )
    }
}