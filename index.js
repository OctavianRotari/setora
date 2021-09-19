/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import LandingScreen from './src/screens/Landing.screen';
import Home from './src/screens/Home';
import {registerProtectedComponent} from './src/registerProtectedComponent.tsx';

// Non Protected Screens
Navigation.registerComponent('co.setora.LandingScreen', () => LandingScreen);

// Protected Screens
registerProtectedComponent('co.setora.HomeScreen', () => Home);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'co.setora.LandingScreen',
            },
          },
        ],
      },
    },
  });
});
