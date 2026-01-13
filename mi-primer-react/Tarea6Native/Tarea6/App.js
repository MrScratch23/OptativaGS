import { View, StyleSheet } from 'react-native';
import ThemeSwitcher from './ThemeSwitcher';
import ThemedText from './ThemedText';
import ThemeStatus from './ThemeStatus';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeSwitcher />
      <ThemedText />
      <ThemeStatus />
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

