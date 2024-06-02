import { ETheme } from "@domain/enum/ETheme";
import { TThemes } from "@domain/interfaces/ITheme";
import colors from "./colors";

const Inter_100Thin = "Inter_100Thin";
const Inter_200ExtraLight = "Inter_200ExtraLight";
const Inter_300Light = "Inter_300Light";
const Inter_400Regular = "Inter_400Regular";
const Inter_500Medium = "Inter_500Medium";
const Inter_600SemiBold = "Inter_600SemiBold";
const Inter_700Bold = "Inter_700Bold";
const Inter_800ExtraBold = "Inter_800ExtraBold";
const Inter_900Black = "Inter_900Black";

const Archivo_100Thin = "Archivo_100Thin";
const Archivo_200ExtraLight = "Archivo_200ExtraLight";
const Archivo_300Light = "Archivo_300Light";
const Archivo_400Regular = "Archivo_400Regular";
const Archivo_500Medium = "Archivo_500Medium";
const Archivo_600SemiBold = "Archivo_600SemiBold";
const Archivo_700Bold = "Archivo_700Bold";
const Archivo_800ExtraBold = "Archivo_800ExtraBold";
const Archivo_900Black = "Archivo_900Black";
const Archivo_100Thin_Italic = "Archivo_100Thin_Italic";
const Archivo_200ExtraLight_Italic = "Archivo_200ExtraLight_Italic";
const Archivo_300Light_Italic = "Archivo_300Light_Italic";
const Archivo_400Regular_Italic = "Archivo_400Regular_Italic";
const Archivo_500Medium_Italic = "Archivo_500Medium_Italic";
const Archivo_600SemiBold_Italic = "Archivo_600SemiBold_Italic";
const Archivo_700Bold_Italic = "Archivo_700Bold_Italic";
const Archivo_800ExtraBold_Italic = "Archivo_800ExtraBold_Italic";
const Archivo_900Black_Italic = "Archivo_900Black_Italic";
const Itim_400Regular = 'Itim_400Regular'

const themes: TThemes = {
  [ETheme.default]: {
    colors,
    shadows: {
      1: "0 2px 4px 0px rgba(0, 0, 0, 0.2)",
      2: "2px 2px 12px 2px rgba(99, 99, 99, 0.3)",
    },
    buttonGo: {
      color: colors.white,
      bg: colors.v5,
      bgBorder: colors.v17,
    },
    buttonCancel: {
      color: colors.v16,
      bg: colors.white,
      bgBorder: colors.white,
    },
    buttonPrimary: {
      color: colors.white,
      bg: colors.v10,
      bgBorder: colors.v10,
    },
    buttonSecondary: {
      color: colors.v10,
      bg: colors.white,
      bgBorder: colors.v10,
    },

    buttonLink: {
      color: colors.link,
      bg: colors.v4,
      bgBorder: colors.v3,
    },
    inputForm: {
      color: colors.v10,
      bg: colors.v4,
      bgBorder: colors.v3,
    },
    textDisplay: {
      color: colors.v6,
      bg: colors.v4,
      bgBorder: colors.v3,
    },
    panelDisplay: {
      labelColor: colors.v11,
      descriptionColor: colors.v11,
      bgBorder: colors.v2,
      bg: colors.v12,
    },
    buttonBox: {
      color: colors.white,
      bg: colors.v5,
      bgBorder: colors.v4,
    },
    headerNavigationChildren: {
      label: {
        color: colors.v9,
      },
    },
    checklistHealthItem: {
      color: colors.white,
      bg: colors.v15,
      bgBorder: colors.v14,
    },
  },
  [ETheme.colorBlind]: {
    colors,
    shadows: {
      1: "0 2px 4px 0px rgba(0, 0, 0, 0.2)",
      2: "2px 2px 12px 2px rgba(99, 99, 99, 0.3)",
    },
    buttonGo: {
      color: colors.white,
      bg: colors.v4,
      bgBorder: colors.v3,
    },
    buttonCancel: {
      color: colors.v16,
      bg: colors.white,
      bgBorder: colors.white,
    },
    buttonPrimary: {
      color: colors.v16,
      bg: colors.v10,
      bgBorder: colors.v10,
    },
    buttonSecondary: {
      color: colors.white,
      bg: colors.v10,
      bgBorder: colors.v10,
    },
    buttonLink: {
      color: colors.link,
      bg: colors.v4,
      bgBorder: colors.v3,
    },
    inputForm: {
      color: colors.link,
      bg: colors.v4,
      bgBorder: colors.v3,
    },
    textDisplay: {
      color: colors.v6,
      bg: colors.v4,
      bgBorder: colors.v3,
    },
    panelDisplay: {
      labelColor: colors.v11,
      descriptionColor: colors.v11,
      bgBorder: colors.v2,
      bg: colors.v12,
    },
    buttonBox: {
      color: colors.white,
      bg: colors.v5,
      bgBorder: colors.v4,
    },
    headerNavigationChildren: {
      label: {
        color: colors.v9,
      },
    },

    checklistHealthItem: {
      color: colors.white,
      bg: colors.v15,
      bgBorder: colors.v14,
    },
  },

  fonts: {
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
    
    Itim_400Regular

    // interLight: Inter_300Light,
    // interRegular: Inter_400Regular,
    // interMedium: Inter_500Medium,
    // interSemiBold: Inter_600SemiBold,
    // interBold: Inter_700Bold,
    // primary_300: Inter_300Light,
    // primary_400: Inter_400Regular,
    // primary_500: Inter_500Medium,
    // primary_600: Inter_600SemiBold,
    // primary_700: Inter_700Bold,

    // secondary_400: Archivo_400Regular,
    // secondary_500: Archivo_500Medium,
    // secondary_600: Archivo_600SemiBold,
  },
};

export default themes;
