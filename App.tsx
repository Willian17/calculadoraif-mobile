import { StyleSheet, Text, View } from 'react-native';
import MinimumThirdAndFourthBimester from './src/screens/MinimumThirdAndFourthBimester';

export default function App() {
  return (
    <View style={styles.container}>
      <MinimumThirdAndFourthBimester />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
});
