import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './style'
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class DrawerContent extends Component {
    render() {
        return (
            <View style={styles.DC}>
                <View style={styles.container}>
                        <Text style={styles.txtSett} >Settings</Text>
                        <TouchableOpacity style={styles.touch} onPress={() => { this.props.navigation.navigate('MainScreen') }}>
                            <Icon name="home" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Return to HomeScreen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name="flare" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Geolocation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name="add-location" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Temperature</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name="lock" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Lock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name="notifications" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Notifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name="airplay" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Background</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name="map" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Weather-Map</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name="widgets" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Widgets</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name="contact-mail" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Tell about problem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name="message" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Contact us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}
                            onPress={() => this.props.navigation.navigate('LoginScreen')}>
                            <Icon name="all-out" size={25} color={colors.emerald} />
                            <Text style={styles.txt}>Log Out</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}