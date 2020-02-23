import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/mainScreen';
import SecondScreen from '../screens/secondScreen';

const tabbarOption = {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
        pressColor: '#0792fc',
        activeTintColor: '#000000',
        inactiveTintColor: '#000000',
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
        SecondScreen : {
            screen: SecondScreen,
        },
        
    },
    {
        tabBarOptions: tabbarOption,
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        backBehavior: 'none',
        safeAreaInset: { bottom: 'always', top: 'never' }
    }
);

export default createAppContainer(TabNavigator);