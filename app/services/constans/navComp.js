import colors from './colors';
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import DrawerContent from '../../screens/drawerContent'
import HeaderRight from '../../components/headerRight'
import HeaderLeft from '../../components/headerLeft'


export default {
    TabBarOptions: {
        style: {
            backgroundColor: 'transparent',
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
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.emerald,
        inactiveTintColor: colors.white,
        pressColor: colors.emerald,
        indicatorStyle: {
            padding: 0,
            height: 0,
            margin: 0,
        }
    },
    NavOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: 'transparent',
            height: 40,
        },
        cardStyle: {
            backgroundColor: 'transparent'
        },
        showIcon: true,
        title: null,
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerRight: () => <HeaderRight navigation={navigation} />
    }),
    Icon: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="dot-single" color={tintColor} size={40} style={{ marginTop: -15 }} />
        ),
    },
    ContComp: {
        drawerBackgroundColor: colors.emerald,
        showLabel: false,
        contentComponent: ({ navigation }) => <DrawerContent navigation={navigation} />
    }

}