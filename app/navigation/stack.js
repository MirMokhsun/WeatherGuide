import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { LoginScreen } from '../screens/loginScreen'
import { RegistrScreen } from '../screens/registrScreen'
import Header from '../components/header'
import DrawerNav from './drawer'
import colors from '../services/constans/colors'

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
            navigationOptions: ({ navigation }) => ({
                title: '',
                headerStyle: {
                    backgroundColor: colors.Back
                },
                showIcon: true,
                headerLeft: () => <Header navigation={navigation} />
            })
        },
    }
)
