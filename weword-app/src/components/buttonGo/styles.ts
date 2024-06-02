import { EThemeButtomType } from "@domain/enum/EThemeButtomType";
import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<ITheme>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => (p.type == EThemeButtomType.secondary ? themes[p.themeSelected].buttonSecondary.bg : themes[p.themeSelected].buttonPrimary.bg)};
  border-color: ${(p) => (p.type == EThemeButtomType.secondary ? themes[p.themeSelected].buttonSecondary.bgBorder : themes[p.themeSelected].buttonPrimary.bgBorder)};
  border-width: 1px;
  border-radius: 8px;
`;

export const Title = styled.Text<ITheme>`
  display: flex;
  margin: 15px 20px;
  color: ${(p) => (p.type == EThemeButtomType.secondary ? themes[p.themeSelected].buttonSecondary.color : themes[p.themeSelected].buttonPrimary.color)};
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  letter-spacing: 2px;
  font-size: 18px;  
`;
