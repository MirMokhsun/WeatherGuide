import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/mainScreen';
import SecondScreen from '../screens/secondScreen';
import navComp from '../services/constans/navComp'

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
        order: ['MainScreen', 'SecondScreen'],
        tabBarOptions: navComp.TabBarOptions
    }
);

export default createAppContainer(TabNavigator);