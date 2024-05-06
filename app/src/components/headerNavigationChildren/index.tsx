import { EModelComponent } from "@domain/enum/EModelComponent";
import { ETheme } from "@domain/enum/ETheme";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

export interface IHeaderNavigationChildren {
  theme: ETheme;
  typeModel: EModelComponent;
  routeBack?: () => void;
  label: string;
}
const HeaderNavigationChildren = ({
  theme,
  typeModel,
  routeBack,
  label,
}: IHeaderNavigationChildren) => {
  return (
    <S.Container themeSelected={theme}>
      <S.HeaderLogo themeSelected={theme}>
        <TouchableOpacity onPress={routeBack}>
          <S.ArrowLeftStyle themeSelected={theme} typeModel={typeModel} />
        </TouchableOpacity>
        {typeModel === EModelComponent.light ? (
          <S.HeaderLightStyle themeSelected={theme} />
        ) : (
          <S.HeaderDarkStyle themeSelected={theme} />
        )}
        <S.Label themeSelected={theme}>{label}</S.Label>
      </S.HeaderLogo>
    </S.Container>
  );
};

HeaderNavigationChildren.defaultProps = {
  typeModel: EModelComponent.light,
};

export { HeaderNavigationChildren };
