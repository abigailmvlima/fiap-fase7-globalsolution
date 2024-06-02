import { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import { Image } from 'react-native';

import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonGo } from '@components/buttonGo';
import { EThemeButtomType } from '@domain/enum/EThemeButtomType';

const ViewHome = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  return (
    <S.Container themeSelected={theme}>
      <S.Banner>
        <Image
          source={require('../../assets/images/banner.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </S.Banner>
      <S.Contents>
        <S.Description>
          Juntos, com a sua ajuda, transformaremos o mundo em um lugar melhor.
        </S.Description>

        <S.Buttons>
          <S.Button>
            <ButtonGo
              theme={theme}
              type={EThemeButtomType.secondary}
              label={'MEUS REGISTROS'}
              onPress={route.details}
            />
          </S.Button>
          <S.Button>
            <ButtonGo
              theme={theme}
              label={'DENUNCUAR'}
              onPress={route.details}
            />
          </S.Button>
          <S.Button>
            <ButtonGo
              theme={theme}
              label={'PESCA ILEGAL'}
              onPress={route.details}
            />
          </S.Button>
          <S.Button>
            <ButtonGo
              theme={theme}
              label={'ALAGAMENTO'}
              onPress={route.details}
            />
          </S.Button>
          <S.Button>
            <ButtonGo
              theme={theme}
              label={'POLUIÇÃO'}
              onPress={route.details}
            />
          </S.Button>
        </S.Buttons>
      </S.Contents>
      <S.Footer>
        <TouchableOpacity onPress={() => {}}>
          {/* <svg.PlusCircle /> */}
        </TouchableOpacity>
      </S.Footer>
    </S.Container>
  );
};

export default ViewHome;
