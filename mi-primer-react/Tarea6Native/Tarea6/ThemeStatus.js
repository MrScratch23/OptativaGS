import { View, Text, StyleSheet } from 'react-native';
import { useThemeStore } from './store/useThemeStore';

export default function ThemeStatus() {
  const darkMode = useThemeStore(state => state.darkMode); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tema actual: {darkMode ? 'Oscuro' : 'Claro'} {/* segun el modo */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});