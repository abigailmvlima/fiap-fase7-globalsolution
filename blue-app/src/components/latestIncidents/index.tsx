import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const LatestIncidents = ({ data }: any) => {
  return (
    <S.Container>
      <S.ScaleContainer>
        {[1, 10, 25, 50, 70, 80, 100].map((num) => (
          <S.ScaleText key={num}>{num}</S.ScaleText>
        ))}
      </S.ScaleContainer>
      {data.map((item: any, index: number) => (
        <S.Row key={index}>
          <S.State>{item.state}</S.State>
          <S.City>{item.city}</S.City>
          <S.BarContainer>
            <S.Bar style={{ width: `${item.value}%`, backgroundColor: item.color }} />
          </S.BarContainer>
        </S.Row>
      ))}
    </S.Container>
  );
};

LatestIncidents.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LatestIncidents;
