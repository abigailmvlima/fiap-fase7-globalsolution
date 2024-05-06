import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";

import {
  Archivo_100Thin,
  Archivo_100Thin_Italic,
  Archivo_200ExtraLight,
  Archivo_200ExtraLight_Italic,
  Archivo_300Light,
  Archivo_300Light_Italic,
  Archivo_400Regular,
  Archivo_400Regular_Italic,
  Archivo_500Medium,
  Archivo_500Medium_Italic,
  Archivo_600SemiBold,
  Archivo_600SemiBold_Italic,
  Archivo_700Bold,
  Archivo_700Bold_Italic,
  Archivo_800ExtraBold,
  Archivo_800ExtraBold_Italic,
  Archivo_900Black,
  Archivo_900Black_Italic,
} from "@expo-google-fonts/archivo";

import App from "./src/app";

export default function AppGeral() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,

    Archivo_100Thin,
    Archivo_200ExtraLight,
    Archivo_300Light,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Archivo_800ExtraBold,
    Archivo_900Black,
    Archivo_100Thin_Italic,
    Archivo_200ExtraLight_Italic,
    Archivo_300Light_Italic,
    Archivo_400Regular_Italic,
    Archivo_500Medium_Italic,
    Archivo_600SemiBold_Italic,
    Archivo_700Bold_Italic,
    Archivo_800ExtraBold_Italic,
    Archivo_900Black_Italic,
  });

  if (!fontsLoaded) {
    return;
  }

  return <App />;
}
