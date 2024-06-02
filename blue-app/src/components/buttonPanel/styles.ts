import svg from "@assets/svg";
import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<ITheme>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(p) => themes[p.themeSelected].panelDisplay.bgBorder};
  background-color: ${(p) => themes[p.themeSelected].panelDisplay.bg};
  margin: 6px 0;
`;

export const BaseContent = styled.View<ITheme>`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const BaseIcone = styled.Text<ITheme>`
  display: flex;
  margin: 4px 10px;
`;

export const Contents = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BaseText = styled.View<ITheme>`
  display: flex;
`;

export const Label = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  color: ${(p) => themes[p.themeSelected].panelDisplay.labelColor};
  letter-spacing: 3px;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Description = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Archivo_300Light};
  color: ${(p) => themes[p.themeSelected].panelDisplay.descriptionColor};
  letter-spacing: 2px;
  font-size: 15px;
`;

export const IconNotification = styled(svg.IconNotification)`
  display: flex;
`;
