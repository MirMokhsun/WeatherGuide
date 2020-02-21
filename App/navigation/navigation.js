import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AuthPage from './stack'
// import MainApp from '../screens/mainScreen'
import Swipe from './drawer'
import SplashScreen from '../screens/splashScreen'


export const Navigation = createAppContainer(
    createSwitchNavigator({
        SplashScreen,
        // MainApp,
        App: Swipe,
        Auth: AuthPage
    }, {
        initialRouteName: 'SplashScreen'
    }))


