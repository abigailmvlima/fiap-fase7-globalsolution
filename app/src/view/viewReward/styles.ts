import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";

const screenHeight = Dimensions.get("window").height;

export const Container = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => themes[p.themeSelected].colors.v1};
  flex-grow: 1;
  padding-top: ${screenHeight * 0.06};
`;

export const Content = styled.View<ITheme>`
  display: flex;
  flex-grow: 1;
  background-color: ${(p) => themes[p.themeSelected].colors.v2};
`;

export const Footer = styled.View`
  display: flex;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
  margin-left: 5px;
`;

export const HeaderLogo = styled.View`
  display: flex;
  margin-left: 1%;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const Form = styled.View`
  display: flex;
  background-color: #bcc6b5;
  padding: 0 6%;
  padding-top: 15px;
`;

export const BoxUser = styled.View`
  display: flex;
  margin-right: 3%;
  flex-direction: column;
  margin-top: 4px;
`;

export const BoxUserUserName = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_200ExtraLight};
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 4px;
  text-align: right;
`;

export const BoxUserUserPoint = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_200ExtraLight};
  font-size: 12px;
  margin-bottom: 2px;
  text-align: right;
  color: #3b3c3d;
`;

export const PresentationTitle = styled.View`
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
`;

export const PresentationText = styled.View`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const BoxSelectType = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 25px;
  margin-left: 25px;
`;

export const BoxSelectTypeItem = styled.View`
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

export const BoxSelectTypeItemTitle = styled.Text`
  display: flex;
  flex-direction: column;
  padding: 2px;
  text-align: center;
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  letter-spacing: 2px;
  font-size: 14px;
  color: #54585c;
`;

export const Logos = styled.View`
  display: flex;
  margin: 0 10%;
  margin-top: 30px;
`;

export const LogoHapvida = styled.View`
  display: flex;
`;

export const LogoNotreDame = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Panel = styled.View`
  display: flex;
  margin: 20px 6%;
`;

export const BoxProducts = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
`;
