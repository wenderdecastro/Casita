import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Archivo_700Bold, Archivo_500Medium, Archivo_400Regular , Archivo_800ExtraBold, Archivo_900Black, Archivo_600SemiBold} from '@expo-google-fonts/archivo';
import AppRoutes from './src/utils/AppRoutes/AppRoutes';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Archivo_700Bold,
    Archivo_500Medium,
    Archivo_400Regular,
    Archivo_800ExtraBold,
    Archivo_900Black,
    Archivo_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <AppRoutes/>
      <StatusBar style="auto" />
    </>
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
