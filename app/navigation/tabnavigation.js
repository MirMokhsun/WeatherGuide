import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/mainScreen';
import SecondScreen from '../screens/secondScreen';
import colors from '../services/constans/colors';


const tabbarOption = {
    tabBarPosition: 'top',
    animationEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
        pressColor: colors.tabColor,
        showIcon: true,

        labelStyle: {
            marginVertical: 5,
            fontSize: 10,
        },
        indicatorStyle: {
            padding: 0,
            height: 0,
            margin: 0,
        }
    },
};

const TabNavigator = createMaterialTopTabNavigator(
    {
        MainScreen: {
            screen: MainScreen,
        },
        SecondScreen: {
            screen: SecondScreen,
        },

    },
    {
        tabBarPosition: 'top',
        animationEnabled: true,
        backBehavior: 'none',
        pressColor: colors.tabColor,
            showIcon: true,
            labelStyle: {
                marginVertical: 5,
                fontSize: 10,
            },
            indicatorStyle: {
                padding: 0,
                height: 0,
                margin: 0,
            }
        

    }
);

export default createAppContainer(TabNavigator);