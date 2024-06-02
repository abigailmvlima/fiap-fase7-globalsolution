import styled, { css } from "styled-components/native";

import { EModelComponent } from "@domain/enum/EModelComponent";
import { ETextDisplayType } from "@domain/enum/ETextDisplay";
import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";

export const Container = styled.TouchableOpacity<ITheme>`
  display: flex;
  flex-direction: row;
`;

interface IText extends ITheme {
  type: ETextDisplayType;
}

const TypeTitleCSS = (p: IText) => css<IText>`
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  font-size: 20px;
  letter-spacing: 2px;
  text-align: center;
  color: ${p.typeModel === EModelComponent.light
    ? themes[p.themeSelected].textDisplay.color
    : themes[p.themeSelected].colors.v10};
`;

const TypeTextCSS = (p: IText) => css<IText>`
  font-family: ${(p) => themes.fonts.Inter_300Light};
  font-size: 17px;
  letter-spacing: 1px;
  color: ${p.typeModel === EModelComponent.light
    ? themes[p.themeSelected].textDisplay.color
    : themes[p.themeSelected].colors.v10};
`;

const TypeTitle2CSS = (p: IText) => css<IText>`
  font-family: ${(p) => themes.fonts.Inter_600SemiBold};
  font-size: 22px;
  letter-spacing: 2px;
  color: ${p.typeModel === EModelComponent.light
    ? themes[p.themeSelected].colors.v4
    : themes[p.themeSelected].colors.v10};
`;

const TypeMessageCSS = (p: IText) => css<IText>`
  font-family: ${(p) => themes.fonts.Inter_800ExtraBold};
  font-size: 34px;
  letter-spacing: 3px;
  line-height: 45px;
  color: ${p.typeModel === EModelComponent.light
    ? themes[p.themeSelected].textDisplay.color
    : themes[p.themeSelected].colors.v10};
`;

const TypeTitleObsCSS = (p: IText) => css<IText>`
  font-family: ${(p) => themes.fonts.Archivo_300Light};
  font-size: 16px;
  letter-spacing: 1px;
  text-align: justify;
  color: ${themes[p.themeSelected].colors.v9};
`;

const TypeCommumCSS = (p: IText) => css<IText>`
  font-size: 17px;
`;

export const Title = styled.Text<IText>`
  display: flex;
  margin: 2px 2px;
  ${(p) =>
    p.type === ETextDisplayType.title
      ? TypeTitleCSS(p)
      : p.type === ETextDisplayType.text
        ? TypeTextCSS(p)
        : p.type === ETextDisplayType.title2
          ? TypeTitle2CSS(p)
          : p.type === ETextDisplayType.titleObs
            ? TypeTitleObsCSS(p)
            : p.type === ETextDisplayType.message
              ? TypeMessageCSS(p)
              : TypeCommumCSS(p)};
`;
