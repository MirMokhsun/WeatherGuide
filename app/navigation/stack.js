import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/login'
import RegistrScreen from '../screens/registrScreen'

export const AuthPage = createStackNavigator({
    LoginScreen,
    RegistrScreen,
})

export const Appflow = createStackNavigator({
    
})