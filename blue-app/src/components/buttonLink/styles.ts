import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<ITheme>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  color: ${(p) => themes[p.themeSelected].buttonLink.color};
  letter-spacing: 2px;
  font-size: 17px;
`;
