import colors from './colors';
import {Text} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import DrawerContent from '../../screens/drawerContent'
import HeaderRight from '../../components/headerRight'
import HeaderLeft from '../../components/headerLeft'


export default {
    TabBarOptions: {
        style: {
            backgroundColor: colors.Back,
            shadowColor: colors.halfWhite,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
            height: 30
        },
        showLabel: false,
        showIcon: true,
        activeTintColor: colors.emerald,
        inactiveTintColor: colors.halfWhite,
        pressColor: colors.emerald,
        indicatorStyle: {
            padding: 0,
            height: 0,
            margin: 0,
        }
    },
    NavOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: colors.Back,
            height: 40,
        },
        showLabel: false,
        showIcon: true,
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerRight: () => <HeaderRight navigation={navigation} />
    }),
    Icon: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="dot-single" color={tintColor} size={40} style={{ marginTop: -15 }} />
        ),
    },
    ContComp: {
        drawerBackgroundColor: colors.Back,
        contentComponent: ({ navigation }) => <DrawerContent navigation={navigation} />
    }

}