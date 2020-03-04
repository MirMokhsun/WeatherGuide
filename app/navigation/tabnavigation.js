import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/mainScreen';
import SecondScreen from '../screens/secondScreen';
import navComp from '../services/constans/navComp'
import routs from '../services/constans/routs';

const TabNavigator = createMaterialTopTabNavigator(
    {
        MainScreen: {
            screen: MainScreen,
            navigationOptions: navComp.Icon
        },
        SecondScreen: {
            screen: SecondScreen,
            navigationOptions: navComp.Icon
        },
    },
    {
        order: [routs.MainScreen, routs.SecondScreen],
        tabBarOptions: navComp.TabBarOptions
    }
);

export default createAppContainer(TabNavigator);