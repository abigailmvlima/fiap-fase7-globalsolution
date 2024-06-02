import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<ITheme>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 6px 0;
`;

export const Contents = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductItem = styled.View<ITheme>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ProductItemTitle = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  color: ${(p) => themes[p.themeSelected].panelDisplay.labelColor};
  letter-spacing: 3px;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const ProductItemBrand = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  color: ${(p) => themes[p.themeSelected].panelDisplay.labelColor};
  letter-spacing: 3px;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const ProductItemPriceMiles = styled.Text<ITheme>`
  display: flex;
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  color: ${(p) => themes[p.themeSelected].panelDisplay.labelColor};
  letter-spacing: 3px;
  font-size: 15px;
  margin-bottom: 8px;
  text-align: right;
`;

export const ProductItemImage = styled.View<ITheme>`
  display: flex;
`;

export const ProductItemBase = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  width: 250px;
`;

export const ProductItemBaseLine = styled.View`
  display: flex;
  flex-direction: column;
`;
