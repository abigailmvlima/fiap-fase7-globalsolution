import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image } from 'react-native';

import { ButtonGo } from '@components/buttonGo';
import { ButtonLink } from '@components/buttonLink';
import { InputForm } from '@components/inputForm';
import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { EInputPosition, EInputType } from '@domain/enum/EInput';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';
import { ILogin } from '@domain/interfaces/login';
import serviceAuth from '@service/serviceAuth';

import * as S from './styles';
import svg from '@assets/svg';
import { EThemeButtomType } from '@domain/enum/EThemeButtomType';

const ViewSplash = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const methods = useForm({
    defaultValues: {
      mail: 'elio.designer@hotmail.com',
      password: 'Ab@102030',
      remember: true,
    },
  });

  return (
    <S.Container themeSelected={theme}>
      <S.Contents>
        <S.Header>
          <S.LogoText>
            <svg.LogoText />
          </S.LogoText>
          <S.Title>Detector de Anomalias</S.Title>
          <S.Logo>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{ width: 350 }}
              resizeMode="contain"
            />
          </S.Logo>
        </S.Header>
      </S.Contents>
      <S.Footer>
        <S.Buttons>
          <S.Button>
            <ButtonGo
              theme={theme}
              label={'ENTRAR'}
              onPress={route.login}
            />
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
