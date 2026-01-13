import { View, StyleSheet } from 'react-native';
import ThemeSwitcher from './ThemeSwitcher';
import ThemedText from './ThemedText';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeSwitcher />
      <ThemedText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 20
  }
});

