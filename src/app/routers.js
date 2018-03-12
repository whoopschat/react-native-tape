import React from 'react';
import {StackNavigator} from 'react-navigation';
// screens
import NavigationScreen from './screens/examples/navigation';
import MainScreen from './screens/main';
import CenterScreen from './screens/examples/center';

// RouteName
export const RouteName = Object.freeze({
  Main: 'Main',
  Navigation: 'Navigation',
  Center: 'Center',
});

// RouteMap
export const RouteMap = {
  [RouteName.Main]: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  [RouteName.Center]: {
    screen: CenterScreen,
    path: 'center/:name',
    navigationOptions: {
      header: null
    }
  },
  [RouteName.Navigation]: {
    screen: NavigationScreen,
    navigationOptions: {
      header: null
    }
  }
};

export default StackNavigator(RouteMap, {
  initialRouteName: RouteName.Main,
});