import React from 'react'
import {Dimensions} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import DrawerContent from '../screens/drawerContent'
import { createAppContainer } from 'react-navigation';
import { Appflow } from './stack';
import TabNavigator from './tabnavigation';



const DrawerNav = createDrawerNavigator({
    DrawerMenu: {
        screen: TabNavigator,
    }
}, {
    drawerWidth: Dimensions.get('window').width - 70,
    contentComponent: ({ navigation }) => <DrawerContent navigation={navigation} />
})

export default createAppContainer(DrawerNav)