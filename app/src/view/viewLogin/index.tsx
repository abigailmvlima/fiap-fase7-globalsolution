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

const ViewLogin = () => {
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
          <S.Logo>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{ width: 300 }}
              resizeMode="contain"
            />
          </S.Logo>
        </S.Header>
        <S.Form>
          <FormProvider {...methods}>
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.mail}
              isLowerCase={true}
              name={'mail'}
              placeholder={''}
            />

            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.password}
              isLowerCase={true}
              name={'password'}
              placeholder={''}
            />
          </FormProvider>
        </S.Form>        
        <S.Buttons>
          <S.Button>
            <ButtonGo
              theme={theme}
              label={'ENTRAR'}
              onPress={async () => {
                const data: ILogin = await methods.getValues();
                await serviceAuth.onLogin(data, route.home);
              }}
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

export default ViewLogin;
