import React from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import AuthPage from './stack/stack'
import AppFlow from  './stack/stack'
import SplashScreen from '../screens/splashScreen'

const Navigation = createSwitchNavigator({
    SplashScreen,
    App: {screen: AppFlow},
    Auth: {screen: AuthPage}
},
{
    initialRouteName: 'SplashScreen'
}
)



export default createAppContainer(Navigation);