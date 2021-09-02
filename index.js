/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import LandingScreen from './src/screens/Landing.screen';

Navigation.registerComponent('co.setora.LandingScreen', () => LandingScreen);

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
