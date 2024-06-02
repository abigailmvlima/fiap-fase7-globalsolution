import svg from "@assets/svg";
import { EModelComponent } from "@domain/enum/EModelComponent";
import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
`;

export const HeaderLogo = styled.View<ITheme>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IArrowLeftStyle extends ITheme {
  typeModel: EModelComponent;
}
export const ArrowLeftStyle = styled(svg.ArrowLeftDark)<IArrowLeftStyle>`
  display: flex;
  fill: ${(p) =>
    p.typeModel === EModelComponent.light
      ? themes[p.themeSelected].colors.v6
      : themes[p.themeSelected].colors.v5};
  margin-right: 18px;
`;

export const HeaderLightStyle = styled(svg.HeaderLight)<ITheme>`
  display: flex;
  fill: ${(p) => themes[p.themeSelected].colors.v6};
`;

export const HeaderDarkStyle = styled(svg.HeaderDark)<ITheme>`
  display: flex;
  fill: ${(p) => themes[p.themeSelected].colors.v6};
`;

export const Label = styled.Text<ITheme>`
  display: flex;
  position: absolute;
  left: 58px;
  top: 53px;
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  color: ${(p) => themes[p.themeSelected].headerNavigationChildren.label.color};
  letter-spacing: 3px;
  font-size: 15px;
  margin-bottom: 8px;
`;
