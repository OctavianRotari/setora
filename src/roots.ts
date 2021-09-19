import {LayoutRoot, Navigation} from 'react-native-navigation';

export const landingRoot = (): LayoutRoot => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
    },
    topBar: {
      noBorder: true,
      elevation: 0,
      visible: true,
    },
  });

  return {
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
  };
};

export const homeRoot = (): LayoutRoot => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
    },
    topBar: {
      noBorder: true,
      elevation: 0,
      visible: true,
    },
  });

  return {
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'co.setora.HomeScreen',
            },
          },
        ],
      },
    },
  };
};
