import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Archivo_700Bold, Archivo_500Medium, Archivo_400Regular } from '@expo-google-fonts/archivo';
import AppRoutes from './src/utils/AppRoutes';
import AppButton from './src/components/AppButton';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Archivo_700Bold,
    Archivo_500Medium,
    Archivo_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppButton textButton='CONTINUAR'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
