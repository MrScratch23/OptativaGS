import { Text, StyleSheet } from 'react-native';
import { useThemeStore } from './store/useThemeStore';

export default function ThemedText() {
  const darkMode = useThemeStore(state => state.darkMode);

  return (
    <Text style={[styles.text, darkMode && styles.dark]}>
      Este texto cambia según el estado global
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: '#000'
  },
  dark: {
    color: '#fff',
    backgroundColor: '#000',
    padding: 10
  }
});

