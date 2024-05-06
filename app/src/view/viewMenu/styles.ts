import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView<ITheme>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => themes[p.themeSelected].colors.v1};
`;

export const Contents = styled.View`
  display: flex;
  margin: 0 4%;
`;

export const Footer = styled.View`
  display: flex;
`;
