import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as S from './styles';

import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';

const ViewDetails = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const incidents = [
    {
      title: 'Agrupamento incomuns barcos',
      description: 'Avistei barcos com atividades suspeitas',
    },
    {
      title: 'Pesca em áreas protegidas',
      description: 'Pescadores com atividades fora do período licenciado',
    },
  ];

  return (
    <S.Container themeSelected={theme}>
      <S.Header>
        <S.Title>Faça a diferença</S.Title>
        <S.Subtitle>
          Juntos, com a sua ajuda, transformaremos o mundo em um lugar melhor.
        </S.Subtitle>
      </S.Header>
      <S.Content>
        {incidents.map((incident, index) => (
          <S.IncidentBox key={index}>
            <S.IncidentTitle>{incident.title}</S.IncidentTitle>
            <S.IncidentDescription>{incident.description}</S.IncidentDescription>
          </S.IncidentBox>
        ))}
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
