import { useContext, useEffect, useState } from 'react';
import * as S from './styles';

import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';

import { TouchableOpacity } from 'react-native-gesture-handler';
import LatestIncidents  from '@components/latestIncidents';
import ListIncidents from '@components/listIncidents';

const data = [
  { state: 'BA', city: 'Salvador', value: 15, color: '#4CAF50' },
  { state: 'BA', city: 'Ponta da Cruz', value: 50, color: '#FFEB3B' },
  { state: 'RS', city: 'Tamandai', value: 100, color: '#F44336' },
  { state: 'RS', city: 'Torres', value: 75, color: '#FF9800' },
];

const dataListIncidents = [
  { label: 'Agrupamento Incomum de Barcos', percentage: '96%', color: '#F44336' },
  { label: 'Pesca em Áreas Protegidas', percentage: '12%', color: '#FF9800' },
  { label: 'Diminuição Rápida da População', percentage: '50%', color: '#FFEB3B' },
  { label: 'Poluição Costeira', percentage: '15%', color: '#4CAF50' },
];

const ViewHome = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  return (
    <S.Container themeSelected={theme}>
      <S.Title>Detector de Anobalias</S.Title>
      <S.Content themeSelected={theme}>
        <LatestIncidents data={data} />
        <ListIncidents data={dataListIncidents} />
      </S.Content>
      <S.Footer>
        <TouchableOpacity onPress={() => {}}>
          {/* <svg.PlusCircle /> */}
        </TouchableOpacity>
      </S.Footer>
    </S.Container>
  );
};

export default ViewHome;
