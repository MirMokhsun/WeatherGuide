import { createStackNavigator } from 'react-navigation-stack'
import { LoginScreen } from '../screens/loginScreen'
import { RegistrScreen } from '../screens/registrScreen'
import DrawerNav from './drawer'
import navComp from '../services/constans/navComp'
import MapMe from '../screens/gMap'
import Locations from '../screens/locationsScreen'
import LocationFind from '../screens/locationFind'
import colors from '../services/constans/colors'
import DetailsScreen from '../screens/detailsScreen'

export const AuthenticationStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    RegistrScreen: { screen: RegistrScreen },
},
    {
        transparentCard: true,
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
            navigationOptions: {
                headerBackground: 'transparent'
            }

        },
        Locations:
        {
            screen: Locations,
            navigationOptions:
            {
                headerStyle: {
                    backgroundColor: colors.headerDark,
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
        },
        DetailsScreen:
        {
            screen: DetailsScreen,
            navigationOptions:
            {
                headerStyle: {
                    backgroundColor: colors.headerDark,
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.00,

                    elevation: 1,
                },
            }
        }
    }
)

