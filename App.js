import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Archivo_700Bold, Archivo_500Medium, Archivo_400Regular } from '@expo-google-fonts/archivo';
import { BodyLarge, BodyMedium, BodySmall, H1, H2, H3 } from './src/components/AppFonts';
import AppInput from './src/components/AppInput';
import { Gap } from './src/components/AppSpecialComponents';

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
      <H1>Esse é o Titulo</H1>
      <H2>Esse é o Titulo</H2>
      <H3>Esse é o Titulo</H3>
      <BodyLarge>Esse é o body</BodyLarge>
      <BodyMedium>Esse é o body</BodyMedium>
      <BodySmall>Esse é o body</BodySmall>

      <AppInput label={'Email'} />
      <Gap height={20}/>
      <AppInput placeholder={'Teste'} isEditable={false} />
      <Gap height={20}/>
      <AppInput isObscureText/>
      
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
