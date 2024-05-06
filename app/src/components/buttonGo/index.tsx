import { ETheme } from "@domain/enum/ETheme";
import * as S from "./styles";

export interface IButtonGo {
  theme: ETheme;
  onPress?: () => void;
  label: string;
}
const ButtonGo = ({ theme, onPress, label }: IButtonGo) => {
  return (
    <S.Container themeSelected={theme} onPress={onPress && onPress}>
      <S.Title themeSelected={theme}>{label}</S.Title>
    </S.Container>
  );
};

export { ButtonGo };
