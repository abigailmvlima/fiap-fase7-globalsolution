import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ContextNavigation } from "@context/contextNavigation";
import { TNavigation } from "@domain/types/TNavigation";

import { ContextTheme } from "@context/contextTheme";
import { IContextTheme } from "@domain/interfaces/IContextTheme";
import * as S from "./styles";

const Menu = ({ onPress }: { onPress?: () => void }) => {
  const { theme } = useContext<IContextTheme>(ContextTheme);
  const { route } = useContext<TNavigation>(ContextNavigation);

  return (
    <S.Container themeSelected={theme}>
      <S.Content>
        <TouchableOpacity onPress={route.home}>
          <S.Col>
            <S.IconHome />
            <S.ColText>Ínicio</S.ColText>
          </S.Col>
        </TouchableOpacity>
        <TouchableOpacity>
          <S.Col>
            <S.IconClient />
            <S.ColText>Perfil</S.ColText>
          </S.Col>
        </TouchableOpacity>
        <TouchableOpacity>
          <S.Col>
            <S.IconCar />
            <S.ColText>Carrinho</S.ColText>
          </S.Col>
        </TouchableOpacity>
        <TouchableOpacity onPress={route.chat}>
          <S.Col>
            <S.IconSac />
            <S.ColText>SAC</S.ColText>
          </S.Col>
        </TouchableOpacity>
        <TouchableOpacity onPress={route.login}>
          <S.Col>
            <S.IconClose />
            <S.ColText>Sair</S.ColText>
          </S.Col>
        </TouchableOpacity>
      </S.Content>
    </S.Container>
  );
};

export { Menu };
