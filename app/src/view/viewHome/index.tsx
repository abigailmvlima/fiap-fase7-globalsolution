import { useContext } from "react";
import { Image } from "react-native";

import * as S from "./styles";

import svg from "@assets/svg";
import { Menu } from "@components/menu";
import { TextDisplay } from "@components/textDisplay";
import { ContextNavigation } from "@context/contextNavigation";
import { ContextTheme } from "@context/contextTheme";
import { ETextDisplayType } from "@domain/enum/ETextDisplay";
import { IContextTheme } from "@domain/interfaces/IContextTheme";
import { TNavigation } from "@domain/types/TNavigation";

import { TouchableOpacity } from "react-native-gesture-handler";
import ImgChallenge from "../../assets/images/imgChallenge.png";
import ImgReward from "../../assets/images/imgReward.png";

const ViewHome = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

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
      <S.Content themeSelected={theme}>
        <S.PresentationTitle>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.title}
            label={"Olá, seu caminho para um mundo melhor"}
          />
        </S.PresentationTitle>
        <S.PresentationText>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.titleObs}
            label={
              "Na EcoMiles, acreditamos na transformação positiva. Nosso compromisso é construir um mundo sustentável, inclusivo e responsável. Junte-se a nós nessa jornada empolgante."
            }
          />
        </S.PresentationText>

        <S.BoxSelectType>
          <S.BoxSelectTypeItem>
            <S.BoxSelectTypeItemTitle>Desafios</S.BoxSelectTypeItemTitle>
            <Image source={ImgChallenge} style={{ width: 140, height: 140 }} />
          </S.BoxSelectTypeItem>
          <S.BoxSelectTypeItem>
            <TouchableOpacity>
              <S.BoxSelectTypeItemTitle>Recompensa</S.BoxSelectTypeItemTitle>
              <Image source={ImgReward} style={{ width: 140, height: 140 }} />
            </TouchableOpacity>
          </S.BoxSelectTypeItem>
        </S.BoxSelectType>

        <S.PresentationText>
          <TextDisplay
            theme={theme}
            type={ETextDisplayType.titleObs}
            label={`Ganhe "milas" ao participar de desafios ESG, como redução de desperdício e inclusão, e troque "milas" por pontos de recompensa oferecidos por empresas doadoras de produtos. Faça a diferença de forma sustentável.`}
          />
        </S.PresentationText>
      </S.Content>
      <S.Footer>
        <Menu />
      </S.Footer>
    </S.Container>
  );
};

export default ViewHome;
