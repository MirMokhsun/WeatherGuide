import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/login'
import RegistrScreen from '../screens/registrScreen'

const AuthPage = createStackNavigator(
    {
        LoginScreen,
        RegistrScreen,
    },
    {
        initialRouteName: LoginScreen
    }
)

export default createAppContainer(AuthPage);



// export const Appflow = createStackNavigator({

// })