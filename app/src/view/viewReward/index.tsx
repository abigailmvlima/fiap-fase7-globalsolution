import { useContext } from "react";

import * as S from "./styles";

import svg from "@assets/svg";
import { InputForm } from "@components/inputForm";
import { Menu } from "@components/menu";
import { ProductsList } from "@components/productsList";
import { TextDisplay } from "@components/textDisplay";
import { ContextNavigation } from "@context/contextNavigation";
import { ContextTheme } from "@context/contextTheme";
import { EInputPosition, EInputType } from "@domain/enum/EInput";
import { ETextDisplayType } from "@domain/enum/ETextDisplay";
import { IContextTheme } from "@domain/interfaces/IContextTheme";
import { IProducts } from "@domain/interfaces/IProducts";
import { TNavigation } from "@domain/types/TNavigation";
import { FormProvider, useForm } from "react-hook-form";

const ViewReward = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const methods = useForm({
    defaultValues: {
      searchText: "",
    },
  });

  const products: IProducts[] = [
    {
      title: "Novo Kindle 11ª Geração",
      brand: "Amazon",
      priceMiles: 8000,
      imageUrl:
        "https://m.media-amazon.com/images/I/71B1wzw1LkL._AC_SX679_.jpg",
    },
    {
      title: "Echo (4ª Geração)",
      brand: "Amazon",
      priceMiles: 5000,
      imageUrl:
        "https://m.media-amazon.com/images/I/61xYCf3ccFL._AC_SX679_.jpg",
    },
    {
      title: "Lâmpada Inteligente Smart Color",
      brand: "Elgin",
      priceMiles: 3500,
      imageUrl:
        "https://m.media-amazon.com/images/I/71I0ebotZwL.__AC_SY445_SX342_QL70_ML2_.jpg",
    },
  ];

  return (
    <S.Container themeSelected={theme}>
      <S.Header>
        <S.HeaderLogo>
          <svg.LogoHorizontal />
        </S.HeaderLogo>
        <S.BoxUser>
          <S.BoxUserUserName themeSelected={theme}>
            Olá, Abigail
          </S.BoxUserUserName>
          <S.BoxUserUserPoint themeSelected={theme}>
            10.250 milhas
          </S.BoxUserUserPoint>
        </S.BoxUser>
      </S.Header>
      <S.Form>
        <FormProvider {...methods}>
          <InputForm
            position={EInputPosition.center}
            theme={theme}
            type={EInputType.cpf}
            isLowerCase={true}
            name={"searchText"}
            placeholder={"pesquise aqui"}
          />
        </FormProvider>
      </S.Form>
      <S.Content themeSelected={theme}>
        <S.PresentationText>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.titleObs}
            label={
              "Aproveite ao máximo suas milhas aqui e troque-as por produtos que você adora."
            }
          />
        </S.PresentationText>
        <S.BoxProducts>
          <ProductsList theme={theme} data={products} />
        </S.BoxProducts>
      </S.Content>
      <S.Footer>
        <Menu />
      </S.Footer>
    </S.Container>
  );
};

export default ViewReward;
