import { Dimensions } from "react-native";
import styled from "styled-components/native";

import svg from "@assets/svg";
import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const Container = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
  background-color: ${(p) => themes[p.themeSelected].colors.v2};
  border-color: ${(p) => themes[p.themeSelected].colors.v1};
  border-top-width: 2px;
  height: ${screenHeight * 0.12};
  width: ${screenWidth};
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Col = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
`;

export const ColText = styled.Text`
  display: flex;
  color: #3b3d40;
  margin-top: 8px;
  letter-spacing: 2px;
  text-align: center;
`;

export const IconHome = styled(svg.IconHome)`
  display: flex;
  width: 70px;
  height: 70px;
`;

export const IconClose = styled(svg.IconClose)`
  display: flex;
  width: 70px;
  height: 70px;
`;

export const IconClient = styled(svg.IconClient)`
  display: flex;
  width: 70px;
  height: 70px;
  margin-right: 2px;
`;

export const IconCar = styled(svg.IconCar)`
  display: flex;
  width: 70px;
  height: 70px;
  margin-right: 5px;
`;
export const IconSac = styled(svg.IconSac)`
  display: flex;
  width: 70px;
  height: 70px;
  margin-right: 5px;
`;
