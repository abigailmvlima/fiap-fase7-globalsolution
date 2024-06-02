import { EModelComponent } from '@domain/enum/EModelComponent';
import { ETheme } from '@domain/enum/ETheme';
import { EThemeButtomType } from '@domain/enum/EThemeButtomType';

export interface ITheme {
  themeSelected: ETheme;
  typeModel?: EModelComponent;
  type?: EThemeButtomType;
  size?: string;
}

export type TThemesColors = {
  white: string;
  black: string;

  dark1: string;

  v1: string;
  v2: string;
  v3: string;
  v4: string;
  v5: string;
  v6: string;
  v7: string;
  v8: string;
  v9: string;
  v10: string;
  v11: string;
  v12: string;
  v13: string;
  v14: string;
  v15: string;
  link: string;
};

export type TThemeschecklistHealthItem = {
  color: string;
  bg: string;
  bgBorder: string;
};

export type TThemesButton = {
  color: string;
  bg: string;
  bgBorder: string;
};

export type TThemesButtonBox = {
  color: string;
  bg: string;
  bgBorder: string;
};

export type TThemesImputForm = {
  color: string;
  bg: string;
  bgBorder: string;
};

export type TTextDisplay = {
  color: string;
  bg: string;
  bgBorder: string;
};

export type TPanelDisplay = {
  labelColor: string;
  descriptionColor: string;
  bg: string;
  bgBorder: string;
};

export type TThemesHeaderNavigationChildren = {
  label: {
    color: string;
  };
};

export type TThemes = {
  fonts: {
    Inter_100Thin?: string;
    Inter_200ExtraLight?: string;
    Inter_300Light?: string;
    Inter_400Regular?: string;
    Inter_500Medium?: string;
    Inter_600SemiBold?: string;
    Inter_700Bold?: string;
    Inter_800ExtraBold?: string;
    Inter_900Black?: string;

    Archivo_100Thin?: string;
    Archivo_200ExtraLight?: string;
    Archivo_300Light?: string;
    Archivo_400Regular?: string;
    Archivo_500Medium?: string;
    Archivo_600SemiBold?: string;
    Archivo_700Bold?: string;
    Archivo_800ExtraBold?: string;
    Archivo_900Black?: string;
    Archivo_100Thin_Italic?: string;
    Archivo_200ExtraLight_Italic?: string;
    Archivo_300Light_Italic?: string;
    Archivo_400Regular_Italic?: string;
    Archivo_500Medium_Italic?: string;
    Archivo_600SemiBold_Italic?: string;
    Archivo_700Bold_Italic?: string;
    Archivo_800ExtraBold_Italic?: string;
    Archivo_900Black_Italic?: string;

    Itim_400Regular?: string;
  };
  default: {
    colors: TThemesColors;
    shadows: {
      1: string;
      2: string;
    };
    inputForm: TThemesImputForm;
    buttonGo: TThemesButton;
    buttonCancel: TThemesButton;
    buttonPrimary: TThemesButton
    buttonSecondary: TThemesButton;
    buttonLink: TThemesButton;
    textDisplay: TTextDisplay;
    panelDisplay: TPanelDisplay;
    buttonBox: TThemesButtonBox;
    headerNavigationChildren: TThemesHeaderNavigationChildren;
    checklistHealthItem: TThemeschecklistHealthItem;
  };

  colorBlind: {
    colors: TThemesColors;
    shadows: {
      1: string;
      2: string;
    };
    inputForm: TThemesImputForm;
    buttonGo: TThemesButton;
    buttonCancel: TThemesButton;
    buttonPrimary: TThemesButton;
    buttonSecondary: TThemesButton;
    buttonLink: TThemesButton;
    textDisplay: TTextDisplay;
    panelDisplay: TPanelDisplay;
    buttonBox: TThemesButtonBox;
    headerNavigationChildren: TThemesHeaderNavigationChildren;
    checklistHealthItem: TThemeschecklistHealthItem;
  };
};
