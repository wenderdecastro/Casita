import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Archivo_700Bold, Archivo_500Medium, Archivo_400Regular, Archivo_800ExtraBold, Archivo_900Black, Archivo_600SemiBold } from '@expo-google-fonts/archivo';
import AppRoutes from './src/utils/AppRoutes/AppRoutes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { LogBox } from 'react-native';


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

  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <AppRoutes />
        <StatusBar style="auto" />
      </BottomSheetModalProvider>
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
