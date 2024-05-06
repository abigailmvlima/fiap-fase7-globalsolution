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

export const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 15px;
  & > :nth-child(1) {
    width: 150px;
    height: 150px;
  }
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: column;
  margin: 5px 5%;
  align-items: center;
`;

export const ButtonGo = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TextOr = styled.Text<ITheme>`
  display: flex;
  margin: 55px 0;
  font-size: 17px;
  color: ${(p) => themes[p.themeSelected].colors.v9};
`;

export const ButtomRegister = styled.View`
  display: flex;
`;

export const Form = styled.View`
  display: flex;
  margin: 0 6%;
`;
