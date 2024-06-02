import React, { useContext } from 'react';
import * as S from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TNavigation } from '@domain/types/TNavigation';
import { ContextNavigation } from '@context/contextNavigation';

const ListIncidents = ({ data }: any) => {
  const { route } = useContext<TNavigation>(ContextNavigation);

  return (
    <S.Container>
      {data.map((incident: any, index: number) => (
        <TouchableOpacity
          onPress={() => {
            route.details(incident);
          }}
        >
          <S.IncidentBox key={index} borderColor={incident.color}>
            <S.IncidentText>{incident.label}</S.IncidentText>
            <S.PercentageText>{incident.percentage}</S.PercentageText>
          </S.IncidentBox>
        </TouchableOpacity>
      ))}
    </S.Container>
  );
};

export default ListIncidents;
