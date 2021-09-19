import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = Record<string, unknown>;

const App: NavigationFunctionComponent<Props> = ({componentId}) => {
  const [email, setEmail] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const sendEmailLink = () => {
    Navigation.push(componentId, {
      component: {
        name: 'co.setora.CheckInboxScreen',
      },
    });
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
          Welcome
        </Text>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <Button title="Send Email Link" onPress={sendEmailLink} />
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
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
