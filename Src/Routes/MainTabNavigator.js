import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import MainScreen from '../Screens/Main';
import DetailsScreen from '../Screens/Details';

const MainStack = createStackNavigator({
  'Main': {
    screen: MainScreen,
    navigationOptions: {
      title: 'Search',
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
    },
  },
  'Details': {
    screen: DetailsScreen,
    navigationOptions: {
      title: 'Details',
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
    },
  }
});

// MainStack.navigationOptions = ({ navigation }) => {
//   let { routeName } = navigation.state.routes[navigation.state.index];
//   let navigationOptions = {};

//   if (routeName === 'Details') {
//     navigationOptions.tabBarVisible = false;
//   }

//   return navigationOptions;
// };

// const FavouriteStack = createStackNavigator({
//   Favourites: FavouriteScreen,
// }, {
//     initialRouteName: 'Favourites',
//     navigationOptions: { tabBarLabel: 'Favourites' },
//     defaultNavigationOptions: {
//       title: 'Favourites',
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//     },
//   });

// const AboutStack = createStackNavigator({
//   About: AboutScreen,
// }, {
//     initialRouteName: 'About',
//     navigationOptions: { tabBarLabel: 'About' },
//     defaultNavigationOptions: {
//       title: 'About',
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//     },
//   });

export default createBottomTabNavigator({
  Obaydah: MainStack,
  // Favourites: FavouriteStack,
  // About: AboutStack,
});