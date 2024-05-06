import { EColorType } from "@domain/types/TStyles";
import themes from "@themes/themes";

export const getColorTypeTitle = (type: EColorType): string => {
  if (type === EColorType.m1) return themes.colorType.title.m1;
  if (type === EColorType.m2) return themes.colorType.title.m2;
  if (type === EColorType.m3) return themes.colorType.title.m3;
  if (type === EColorType.m4) return themes.colorType.title.m4;
  if (type === EColorType.m5) return themes.colorType.title.m5;
  return themes.colorType.title.m1;
};
