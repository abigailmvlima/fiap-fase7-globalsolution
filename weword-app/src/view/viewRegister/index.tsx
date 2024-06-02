import React, { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image } from 'react-native';

import { ButtonGo } from '@components/buttonGo';
import { InputForm } from '@components/inputForm';
import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { EInputType } from '@domain/enum/EInput';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';
import serviceAuth from '@service/serviceAuth';
import * as S from './styles';
import { EThemeButtomType } from '@domain/enum/EThemeButtomType';

const ViewRegister = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      document: '',
      phone: '',
      role: '',
    },
  });

  return (
    <S.Container themeSelected={theme}>
      <S.Contents>
        <S.Header>
          <S.Logo>
            <Image
              source={require('../../assets/images/weWordWhite.png')}
              style={{ width: 350 }}
              resizeMode="contain"
            />
          </S.Logo>
          <S.Title>Faça a diferença</S.Title>
          <S.Description>
            Juntos, com a sua ajuda, transformaremos o mundo em um lugar melhor.
          </S.Description>
        </S.Header>
        <S.Form>
          <FormProvider {...methods}>
            <InputForm
              theme={theme}
              type={EInputType.text}
              name={'name'}
              label={'Nome'}
            />
            <InputForm
              theme={theme}
              type={EInputType.mail}
              name={'email'}
              label={'E-mail'}
            />
            <S.InputForm>
              <S.InputFormCol1>
                <InputForm
                  theme={theme}
                  type={EInputType.text}
                  name={'document'}
                  label={'Documento'}
                />
              </S.InputFormCol1>
              <S.InputFormCol2>
                <InputForm
                  theme={theme}
                  type={EInputType.text}
                  name={'phone'}
                  label={'Telefone'}
                />
              </S.InputFormCol2>
            </S.InputForm>
          </FormProvider>
        </S.Form>
        <S.Buttons>
          <S.Button>
            <ButtonGo
              theme={theme}
              label={'CADASTRAR'}
              onPress={async () => {
                const data: any = await methods.getValues();
                await serviceAuth.onRegister(data, route.home);
              }}
            />
          </S.Button>
          <S.Button>
            <ButtonGo
              theme={theme}
              type={EThemeButtomType.secondary}
              label={'FECHAR'}
              onPress={route.login}
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

export default ViewRegister;
