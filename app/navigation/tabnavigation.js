import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/mainScreen';
import SecondScreen from '../screens/secondScreen';
import components from './components'

const TabNavigator = createMaterialTopTabNavigator(
    {
        MainScreen: {
            screen: MainScreen,
            navigationOptions: components.Icon
        },
        SecondScreen: {
            screen: SecondScreen,
            navigationOptions: components.Icon
        },
    },
    {
        order: ['MainScreen', 'SecondScreen'],
        tabBarOptions: components.TabBarOptions
    }
);

export default createAppContainer(TabNavigator);