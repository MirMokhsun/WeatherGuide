import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../../screens/login'
import RegistrScreen from '../../screens/registrScreen'
import MainScreen from '../../screens/mainScreen';
import SecondScreen from '../../screens/secondScreen'

export const AuthPage = createStackNavigator({
    Login: { screen: LoginScreen },
    Registr: { screen: RegistrScreen }
})

export const Appflow = createStackNavigator({
    Main: {screen: MainScreen},
    Second: {screen: SecondScreen},
})