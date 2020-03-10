import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import {LoginScreen} from '../screens/loginScreen';
import {RegistrScreen} from '../screens/registrScreen';
import DrawerNav from './drawer';
import navComp from '../services/constans/navComp';
import MapMe from '../screens/gMap';
import Locations from '../screens/locationsScreen';
import LocationFind from '../screens/locationFind';
import colors from '../services/constans/colors';
import DetailsScreen from '../screens/detailsScreen';
import HeaderTitles from '../../__mocks__/title';
import AdditionalHeaderLeft from '../components/additionalHeaderLeft';
import GetLocation from '../components/geolocation';

export const AuthenticationStack = createStackNavigator(
  {
    LoginScreen: {screen: LoginScreen},
    RegistrScreen: {screen: RegistrScreen},
  },
  {
    navigationOptions: {
      cardStyle: {
        backgroundColor: 'transparent',
        opacity: 1,
      },
    },
    initialRouteName: 'LoginScreen',
    mode: 'modal',
    headerMode: 'none',
  },
);

export const Appflow = createStackNavigator({
  TabNavigator: {
    screen: DrawerNav,
    navigationOptions: navComp.NavOptions,
  },
  Map: {
    screen: MapMe,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: colors.headerDark,
      },
      headerLeft: () => <AdditionalHeaderLeft navigation={navigation} />,
      headerTitle: () => <HeaderTitles />,
    }),
  },
  Locations: {
    screen: Locations,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: colors.headerDark,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
      },
      headerTintColor: colors.white,
      headerLeft: () => <AdditionalHeaderLeft navigation={navigation} />,
    }),
  },
  LocationFind: {
    screen: LocationFind,
    navigationOptions: {
      header: null,
    },
  },
  DetailsScreen: {
    screen: DetailsScreen,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: colors.headerDark,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
      },
      title: 'Details Screen',
      headerTintColor: colors.white,
      headerLeft: () => <AdditionalHeaderLeft navigation={navigation} />,
    }),
  },
  // DetailsScreen:
  // {
  //     screen: DetailsScreen,
  //     navigationOptions: ({ navigation }) => (
  //         {
  //             headerStyle: {
  //                 backgroundColor: colors.headerDark,
  //                 shadowOffset: {
  //                     width: 0,
  //                     height: 1,
  //                 },
  //                 shadowOpacity: 0.18,
  //                 shadowRadius: 1.00,
  //                 elevation: 1,
  //             },
  //             title: 'Details Screen',
  //             headerTintColor: colors.white,
  //             headerLeft: () => <AdditionalHeaderLeft navigation={navigation} />,
  //         })
  // },
  GetLocation: {
    screen: GetLocation,
    navigationOptions: ({navigation}) => ({
      backgroundColor: 'transparent',
      headerStyle: {
        backgroundColor: colors.headerDark,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
      },
      title: 'Show your Coordinates',
      headerTintColor: colors.white,
      headerLeft: () => <AdditionalHeaderLeft navigation={navigation} />,
    }),
  },
});
