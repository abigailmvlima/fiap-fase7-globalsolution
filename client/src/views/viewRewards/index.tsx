import { useNavigate } from 'react-router-dom';

import Header from 'components/header';

import axios from 'axios';
import ButtonGoHome from 'components/buttonGoHome';
import { EActiveView } from 'domains/enums/EActiveView';
import { useState } from 'react';
import * as S from './styles';

const ViewRewards = () => {
  const navigate = useNavigate();
  const [postalCode, setPostalCode] = useState<string>('03542000');
  const [data, setData] = useState<any>();

  const handleLookup = async () => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${postalCode}/json/`,
      );

      const address: any = response.data;

      setData({
        address: address.logradouro,
        neighborhood: address.bairro,
        city: address.localidade,
      });
    } catch (error) {
      alert('Erro ao consultar o endereço');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <Header activeMenu={EActiveView.about} />
        <S.ButtonBack>
          <ButtonGoHome />
        </S.ButtonBack>
      </S.Header>
      <S.Body></S.Body>
    </S.Container>
  );
};

export default ViewRewards;
