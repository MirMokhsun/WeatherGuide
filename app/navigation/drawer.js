import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import TabNavigator from './tabnavigation';
import navComp from '../services/constans/navComp'


const DrawerNav = createDrawerNavigator({
    DrawerMenu: {
        screen: TabNavigator,
    }
}, navComp.ContComp)

export default createAppContainer(DrawerNav)