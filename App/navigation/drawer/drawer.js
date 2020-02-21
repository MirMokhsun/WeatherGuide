import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import DrawerContent from '../screens/drawerContent'
import AppFlow from '../stack/stack'


const screenWidth = Math.round(Dimensions.get('window').width);

export const BurgerMenu = createDrawerNavigator(
    { AppFlow: { screen: AppFlow } },
    {
        contentComponent: props => <DrawerContent />,
    })

export const Swipe = createDrawerNavigator(
    {
        AppFlow: {
            screen: BurgerMenu
        }
    }, {
    drawerWidth: screenWidth,
    drawerPosition: 'right',
    contentComponent: props => <SecondScreen />
})

