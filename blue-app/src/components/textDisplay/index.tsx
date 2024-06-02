import { EModelComponent } from "@domain/enum/EModelComponent";
import { ETextDisplayType } from "@domain/enum/ETextDisplay";
import { ETheme } from "@domain/enum/ETheme";
import * as S from "./styles";

export interface ITextDisplay {
  theme: ETheme;
  type: ETextDisplayType;
  label: string;
  typeModel: EModelComponent;
}

const TextDisplay = ({ theme, type, label, typeModel }: ITextDisplay) => {
  return (
    <S.Container themeSelected={theme}>
      <S.Title themeSelected={theme} type={type} typeModel={typeModel}>
        {label}
      </S.Title>
    </S.Container>
  );
};

TextDisplay.defaultProps = {
  typeModel: ETextDisplayType.title,
};

export { TextDisplay };
