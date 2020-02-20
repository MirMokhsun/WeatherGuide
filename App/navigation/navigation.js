import React from 'react'
import { Dimensions } from 'react-native'
import { createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import MainScreen from '../screens/mainScreen';
import SecondScreen from '../screens/secondPage'
import DrawerContent from '../screens/drawerContent'

const screenWidth = Math.round(Dimensions.get('window').width);

const BurgerMenu = createDrawerNavigator(
    { Main: { screen: MainScreen } },
    {
        contentComponent: props => <DrawerContent />,
    })

const Navigation = createDrawerNavigator(
    {
        Main: {
            screen: BurgerMenu
        }
    }, {
    drawerWidth: screenWidth,
    drawerPosition: 'right',
    contentComponent: props => <SecondScreen />
})

export default createAppContainer(Navigation);