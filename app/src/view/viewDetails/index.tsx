import { useContext, useEffect, useState } from 'react';
import * as S from './styles';

import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';
import { Image } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

const ViewDetails = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  return (
    <S.Container themeSelected={theme}>
      <S.Title>Detector de Anobalias</S.Title>
      <S.Logo>
        <Image
          source={require('../../assets/images/mapa.png')}
          style={{ width: '80%' }}
          resizeMode="contain"
        />
      </S.Logo>
      <S.Content themeSelected={theme}>
        <S.ContentContainer>
          <S.TitleDescription>Agrupamento Incomum de Barcos</S.TitleDescription>
          <S.Details>
            <S.DetailItem>• Localização: 36.7783° N, 119.4179° W</S.DetailItem>
            <S.DetailItem>
              • Data e Hora da Detecção: 29/05/2024 14:30
            </S.DetailItem>
            <S.DetailItem>• Número de Embarcações Detectadas: 15</S.DetailItem>
          </S.Details>
          <S.Description>
            Durante a análise de imagens de satélite coletadas em 2024-05-29 às
            14:30 UTC, foi identificado um agrupamento incomum de 15 barcos na
            área próxima à Reserva Marinha de Monterey Bay. Este tipo de
            agrupamento pode indicar atividades de pesca ilegal ou outras
            atividades não autorizadas na região.
          </S.Description>
        </S.ContentContainer>
      </S.Content>
      <S.Footer>
        <TouchableOpacity onPress={() => {}}>
          {/* <svg.PlusCircle /> */}
        </TouchableOpacity>
      </S.Footer>
    </S.Container>
  );
};

export default ViewDetails;
