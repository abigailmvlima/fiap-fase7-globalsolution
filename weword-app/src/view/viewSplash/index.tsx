import { useContext } from 'react';
import { Image } from 'react-native';

import { ButtonGo } from '@components/buttonGo';
import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';

import * as S from './styles';
import { EThemeButtomType } from '@domain/enum/EThemeButtomType';

const ViewSplash = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  return (
    <S.Container themeSelected={theme}>
      <S.Contents>
        <S.Header>
          <S.LogoText>
            <Image
              source={require('../../assets/images/weWord.png')}
              style={{ width: 350 }}
              resizeMode="contain"
            />
          </S.LogoText>
          <S.Title>Faça a diferença</S.Title>
        </S.Header>
        <S.Logo>
          <Image
            source={require('../../assets/images/banner1.png')}
            style={{ width: '100%' }}
            resizeMode="contain"
          />
        </S.Logo>
        <S.Buttons>
          <S.Button>
            <ButtonGo theme={theme} label={'ENTRAR'} onPress={route.login} />
          </S.Button>
          <S.Button>
            <ButtonGo
              theme={theme}
              type={EThemeButtomType.secondary}
              label={'CADASTRAR'}
              onPress={route.register}
            />
          </S.Button>
        </S.Buttons>
      </S.Contents>
      <S.Footer>
        <S.FooterBase>
          <S.TitleFooter>
            Ao criar um conta voce concorda com nosso
          </S.TitleFooter>
          <S.TitleFooterSpan>termos</S.TitleFooterSpan>
          <S.TitleFooter> e </S.TitleFooter>
          <S.TitleFooterSpan>politicas de privacidade</S.TitleFooterSpan>
          <S.TitleFooter>.</S.TitleFooter>
        </S.FooterBase>
      </S.Footer>
    </S.Container>
  );
};

export default ViewSplash;
