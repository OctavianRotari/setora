import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = Record<string, unknown>;

const CheckInbox: NavigationFunctionComponent<Props> = ({componentId}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const tryAgain = () => {
    Navigation.pop(componentId);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
        style={backgroundStyle}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          Check your inbox.
        </Text>
        <Button title="Try again" onPress={tryAgain} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default CheckInbox;
