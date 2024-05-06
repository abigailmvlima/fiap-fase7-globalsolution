import { useContext } from "react";

import * as S from "./styles";

import { Menu } from "@components/menu";
import { ContextTheme } from "@context/contextTheme";
import { IContextTheme } from "@domain/interfaces/IContextTheme";

const ViewMenu = () => {
  const { theme } = useContext<IContextTheme>(ContextTheme);

  return (
    <S.Container themeSelected={theme}>
      <S.Contents></S.Contents>
      <S.Footer>
        <Menu />
      </S.Footer>
    </S.Container>
  );
};

export default ViewMenu;
