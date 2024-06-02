import { ETheme } from "@domain/enum/ETheme";
import * as S from "./styles";

export interface IButtonPanel {
  theme: ETheme;
  onPress?: () => void;
  label: string;
  description: string;
}
const ButtonPanel = ({ theme, onPress, label, description }: IButtonPanel) => {
  return (
    <S.Container themeSelected={theme} onPress={onPress}>
      <S.BaseContent themeSelected={theme}>
        <S.BaseIcone themeSelected={theme}>
          <S.IconNotification />
        </S.BaseIcone>
        <S.Contents themeSelected={theme}>
          <S.BaseText themeSelected={theme}>
            <S.Label themeSelected={theme}>{label}</S.Label>
          </S.BaseText>
          <S.BaseText themeSelected={theme}>
            <S.Description themeSelected={theme}>{description}</S.Description>
          </S.BaseText>
        </S.Contents>
      </S.BaseContent>
    </S.Container>
  );
};

export { ButtonPanel };
