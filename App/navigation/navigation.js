import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SplashScreen from '../screens/splashScreen'
import { AuthenticationStack, Appflow } from './stack'

const Navigation = createAppContainer(
    createSwitchNavigator({
        SplashScreen,
        Auth: AuthenticationStack,
        App: Appflow,
    }, {
        initialRouteName: 'SplashScreen'
    }))


export default Navigation