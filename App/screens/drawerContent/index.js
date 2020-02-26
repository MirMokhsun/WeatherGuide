import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './style'
import images from '../../services/constans/images'
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler'


export default class DrawerContent extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginHorizontal: 10, }}>
                <View style={{ justifyContent: 'space-around', flex: 1, flexDirection: 'column' }}>
                    {/* <ScrollView> */}
                        <Text style={{ color: colors.white, fontSize: 45, fontFamily: 'Roboto-Bold' }} >Settings</Text>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => { this.props.navigation.navigate('MainScreen') }}>
                            <Icon name="home" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Return to HomeScreen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Icon name="flare" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Geolocation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Icon name="add-location" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Temperature</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Icon name="lock" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Lock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Icon name="notifications" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Notifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Icon name="airplay" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Background</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Icon name="map" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Weather-Map</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Icon name="widgets" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Widgets</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Icon name="contact-mail" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Tell about problem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Icon name="message" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Bold' }}>Contact us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
                            onPress={() => this.props.navigation.navigate('LoginScreen')}>
                            <Icon name="all-out" size={25} color={colors.emerald} />
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Roboto-Black' }}>Log Out</Text>
                        </TouchableOpacity>
                    {/* </ScrollView> */}
                </View>
            </View>
        )
    }
}