import { useContext } from "react";

import * as S from "./styles";

import svg from "@assets/svg";
import ChatBot from "@components/chatbot";
import { Menu } from "@components/menu";
import { ContextNavigation } from "@context/contextNavigation";
import { ContextTheme } from "@context/contextTheme";
import { IContextTheme } from "@domain/interfaces/IContextTheme";
import { TNavigation } from "@domain/types/TNavigation";

const ViewChat = () => {
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
        <ChatBot />
      </S.Content>
      <S.Footer>
        <Menu />
      </S.Footer>
    </S.Container>
  );
};

export default ViewChat;
