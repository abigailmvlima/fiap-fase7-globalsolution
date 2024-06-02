import { ETheme } from "@domain/enum/ETheme";
import { IProducts } from "@domain/interfaces/IProducts";
import { Image } from "react-native";

import * as S from "./styles";

export interface IProductsList {
  theme: ETheme;
  onPress?: () => void;
  data: IProducts[];
}
const ProductsList = ({ theme, onPress, data }: IProductsList) => {
  return (
    <S.Container themeSelected={theme} onPress={onPress}>
      <S.Contents themeSelected={theme}>
        {data.map((item: IProducts) => (
          <S.ProductItem themeSelected={theme}>
            <S.ProductItemImage themeSelected={theme}>
              <Image
                source={{ uri: item.imageUrl }}
                alt="s"
                style={{ width: 100, height: 100 }}
              />
            </S.ProductItemImage>
            <S.ProductItemBase themeSelected={theme}>
              <S.ProductItemBaseLine>
                <S.ProductItemTitle themeSelected={theme}>
                  {item.title}
                </S.ProductItemTitle>
              </S.ProductItemBaseLine>

              <S.ProductItemBaseLine>
                <S.ProductItemBrand themeSelected={theme}>
                  {item.brand}
                </S.ProductItemBrand>
              </S.ProductItemBaseLine>

              <S.ProductItemBaseLine>
                <S.ProductItemPriceMiles themeSelected={theme}>
                  {item.priceMiles} milas
                </S.ProductItemPriceMiles>
              </S.ProductItemBaseLine>
            </S.ProductItemBase>
          </S.ProductItem>
        ))}
      </S.Contents>
    </S.Container>
  );
};

export { ProductsList };
