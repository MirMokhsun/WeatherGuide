import React from 'react'
import { Button, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/loginScreen'
import RegistrScreen from '../screens/registrScreen'
import Header from '../components/header'
import DrawerNav from './drawer'

export const AuthenticationStack = createStackNavigator({
    LoginScreen,
    RegistrScreen,
},
    {
        headerMode: 'none'
    },
);



export const Appflow = createStackNavigator(
    {
    TabNavigator: {
        screen: DrawerNav,
    navigationOptions: ({navigation})=> ({
        title: 'jhgjhgjhghg',
        headerLeft: ()=><Header navigation={navigation}/>
    })},
    }
)
