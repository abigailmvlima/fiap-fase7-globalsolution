import { ETheme } from "@domain/enum/ETheme";

export interface IContextTheme {
  theme: ETheme;
  onChangeTheme: (value: ETheme) => void;
}
