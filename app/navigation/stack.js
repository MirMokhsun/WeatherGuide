import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/login'
import RegistrScreen from '../screens/registrScreen'
import BurgerMenu from './drawer';
import Header from '../components/header'



const navigationOptions = {
};


export const AuthenticationStack = createStackNavigator({
    LoginScreen,
    RegistrScreen,
}, navigationOptions);

export const Appflow = createStackNavigator({
    BurgerMenu: {
        screen: BurgerMenu,
        navigationOptions: (props) => ({
            header: < Header />
        })
    },

})