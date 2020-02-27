import { createStackNavigator } from 'react-navigation-stack'
import { LoginScreen } from '../screens/loginScreen'
import { RegistrScreen } from '../screens/registrScreen'
import DrawerNav from './drawer'
import components from './components'

export const AuthenticationStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    RegistrScreen: { screen: RegistrScreen },
},
    {
        headerMode: 'none'
    },
);



export const Appflow = createStackNavigator(
    {
        TabNavigator: {
            screen: DrawerNav,
            navigationOptions: components.NavOptions
        },
    }
)
