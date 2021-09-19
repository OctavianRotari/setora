import {Navigation} from 'react-native-navigation';
import {registerProtectedComponent} from './src/registerProtectedComponent.tsx';

import LandingScreen from './src/screens/Landing.screen';
import CheckInboxScreen from './src/screens/CheckInbox.screen';
import SendEmailLinkScreen from './src/screens/SendEmailLink.screen';
import CheckEmailLinkScreen from './src/screens/CheckEmailLink.screen';

import HomeScreen from './src/screens/Home.screen';

// Non Protected Screens
Navigation.registerComponent('co.setora.LandingScreen', () => LandingScreen);
Navigation.registerComponent(
  'co.setora.CheckInboxScreen',
  () => CheckInboxScreen,
);
Navigation.registerComponent(
  'co.setora.SendEmailLinkScreen',
  () => SendEmailLinkScreen,
);
Navigation.registerComponent(
  'co.setora.CheckEmailLinkScreen',
  () => CheckEmailLinkScreen,
);

// Protected Screens
registerProtectedComponent('co.setora.HomeScreen', () => HomeScreen);

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
