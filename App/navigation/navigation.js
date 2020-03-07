import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SplashScreen from '../screens/splashScreen'
import SettingScreen from '../screens/settingsScreen'
import { AuthenticationStack, Appflow } from './stack'

const Navigation = createAppContainer(
    createSwitchNavigator({
        SplashScreen,
        SettingScreen,
        Auth: AuthenticationStack,
        App: {
            screen: Appflow
        }
    }, {

        initialRouteName: 'SplashScreen'
    }))


export default Navigation


