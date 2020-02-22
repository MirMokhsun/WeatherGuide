import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/mainScreen';
import SecondScreen from '../screens/secondScreen';



const TabNavigator = createMaterialTopTabNavigator(
    {
        MainScreen ,
        SecondScreen ,
    },
    {
        initialRouteName: 'MainScreen',
    }
);

export default createAppContainer(TabNavigator);