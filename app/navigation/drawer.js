import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import DrawerContent from '../screens/drawerContent'
import TabNavigator from './tabnavigation';
import { createAppContainer } from 'react-navigation';



const NavRoutes = { TabNavigator }

export const BurgerMenu = createAppContainer(createDrawerNavigator(
    NavRoutes,
    {
        contentComponent: props => <DrawerContent {...props} />,
        drawerBackgroundColor: '#ffffff',
    }
    ))

export default BurgerMenu;