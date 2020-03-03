import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SplashScreen from '../screens/splashScreen'
import { AuthenticationStack, Appflow } from './stack'
import SecondScreen from '../screens/secondScreen'
import MapScreen from '../screens/mapScreen'


const Navigation = createAppContainer(
    createSwitchNavigator({
        SplashScreen,
        Auth: AuthenticationStack,
        App: Appflow,
    }, {

        initialRouteName: 'SplashScreen'
    }))

export const Mapa = createAppContainer(createSwitchNavigator({
    Button:
    {
        screen: SecondScreen
    },
    MapScreen:
    {
        screen: MapScreen
    },
}))

export default Navigation