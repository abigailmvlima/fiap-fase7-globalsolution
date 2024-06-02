import { ETheme } from "@domain/enum/ETheme";
import * as S from "./styles";
import { EThemeButtomType } from "@domain/enum/EThemeButtomType";


export interface IButtonGo {
  theme: ETheme;
  onPress?: () => void;
  label: string;
  type?:EThemeButtomType
}

const ButtonGo = ({ theme, onPress, label, type = EThemeButtomType.default }: IButtonGo) => {
  return (
    <S.Container themeSelected={theme} onPress={onPress && onPress} type={type}>
      <S.Title themeSelected={theme} type={type}>{label}</S.Title>
    </S.Container>
  );
};

export { ButtonGo };
