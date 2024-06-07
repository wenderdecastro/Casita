import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Archivo_700Bold, Archivo_500Medium, Archivo_400Regular , Archivo_800ExtraBold, Archivo_900Black} from '@expo-google-fonts/archivo';
import AppRoutes from './src/utils/AppRoutes/AppRoutes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Archivo_700Bold,
    Archivo_500Medium,
    Archivo_400Regular,
    Archivo_800ExtraBold,
    Archivo_900Black
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <AppRoutes/>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
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
