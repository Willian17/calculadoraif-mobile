import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MinimumThirdAndFourthBimester from './src/screens/MinimumThirdAndFourthBimester';
import { useState } from 'react';

const fetchFonts = () => {
  return Font.loadAsync({
    'raleway-bold': require('./src/assets/fonts/Raleway-Bold.ttf'),
    'inter-bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'inter-regular': require('./src/assets/fonts/Inter-Regular.ttf'),
    'inter-semi-bold': require('./src/assets/fonts/Inter-SemiBold.ttf'),
    'poppins-bold': require('./src/assets/fonts/Poppins-Bold.otf'),
    'poppins-regular': require('./src/assets/fonts/Poppins-Regular.otf'),
    'poppins-semi-bold': require('./src/assets/fonts/Poppins-SemiBold.otf'),
    'roboto-bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'roboto-regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
  });
};
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    )
  }
  return (
    <View style={styles.container}>
      <MinimumThirdAndFourthBimester />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
