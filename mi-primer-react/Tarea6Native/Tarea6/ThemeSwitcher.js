import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { useThemeStore } from './store/useThemeStore';

export default function ThemeSwitcher() {
  const darkMode = useThemeStore(state => state.darkMode);
  const toggleTheme = useThemeStore(state => state.toggleTheme);
  const resetTheme = useThemeStore(state => state.resetTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Modo oscuro: {darkMode ? 'Activado' : 'Desactivado'}
      </Text>

      <Switch
        value={darkMode}
        onValueChange={toggleTheme}
      />
      
      <View style={styles.resetButton}>
        <Button 
          title="Resetear a Claro" 
          onPress={resetTheme}
          color="#666"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  },
  resetButton: {
    marginTop: 20
  }
});