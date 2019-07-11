import React from 'react';
import { Platform } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import MainScreen from '../Screens/Main';
import DetailsScreen from '../Screens/Details';

const MainStack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    headerMode: 'none'
  });

export default createAppContainer(MainStack);