import { createStackNavigator } from 'react-navigation-stack'
import { LoginScreen } from '../screens/loginScreen'
import { RegistrScreen } from '../screens/registrScreen'
import DrawerNav from './drawer'
import navComp from '../services/constans/navComp'
import MapMe from '../screens/gMap'
import Locations from '../screens/locationsScreen'
import LocationFind from '../screens/locationFind'

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
            navigationOptions: navComp.NavOptions
        },
        Map:
        {
            screen: MapMe,

        },
        Locations:
        {
            screen: Locations,
            navigationOptions:
            {
                headerStyle: {
                    backgroundColor: '#273840',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.00,

                    elevation: 1,
                },
            }
        },
        LocationFind:
        {
            screen: LocationFind,
            navigationOptions:
            {
                header: null
            }
        }
    }
)

