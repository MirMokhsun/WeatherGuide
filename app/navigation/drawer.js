import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import TabNavigator from './tabnavigation';
import components from './components'


const DrawerNav = createDrawerNavigator({
    DrawerMenu: {
        screen: TabNavigator,
    }
}, components.ContComp)

export default createAppContainer(DrawerNav)