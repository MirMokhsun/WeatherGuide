import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react'
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/mainScreen';
import SecondScreen from '../screens/secondScreen';
import colors from '../services/constans/colors';
import Icon from 'react-native-vector-icons/Entypo';


const TabNavigator = createMaterialTopTabNavigator(
    {
        MainScreen: {
            screen: MainScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="dot-single" color={tintColor} size={40} />
                ),
            }
        },
        SecondScreen: {
            screen: SecondScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="dot-single" color={tintColor} size={40} />
                )
            }
        },
    },
    {
        order: ['MainScreen', 'SecondScreen'],
        tabBarOptions: {
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
            // () => (<Icon name="dot-single`   " color='red' size={40} />)



        }
    }
);

export default createAppContainer(TabNavigator);