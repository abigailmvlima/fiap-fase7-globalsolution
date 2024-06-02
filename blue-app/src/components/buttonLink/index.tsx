import { ETheme } from "@domain/enum/ETheme";
import * as S from "./styles";

export interface IButtonLink {
  theme: ETheme;
  onPress?: () => void;
  label: string;
}
const ButtonLink = ({ theme, onPress, label }: IButtonLink) => {
  return (
    <S.Container themeSelected={theme} onPress={onPress && onPress}>
      <S.Title themeSelected={theme}>{label}</S.Title>
    </S.Container>
  );
};

export { ButtonLink };
