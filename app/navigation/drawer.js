import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
// import DrawerContent from '../screens/drawerContent'
import AppFlow from './stack'
import { createAppContainer } from 'react-navigation'


const screenWidth = Math.round(Dimensions.get('window').width);

export const BurgerMenu = createDrawerNavigator(
    {
        MainApp:
        {
            screen:AppFlow
        }
    },
    {
        contentComponent: props => null,
        // contentComponent: props => <DrawerContent />,
    })

export const Swipe = createDrawerNavigator(
    {
        AppF: {
            screen: BurgerMenu
        }
    }, {
    drawerWidth: screenWidth,
    drawerPosition: 'right',
    contentComponent: props => <SecondScreen />
})

export default createAppContainer(Swipe)