import { useNavigate } from 'react-router-dom';

import Header from 'components/header';

import ButtonGoHome from 'components/buttonGoHome';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewChallenges = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <Header activeMenu={EActiveView.challenges} />
        <S.ButtonBack>
          <ButtonGoHome />
        </S.ButtonBack>
      </S.Header>
      <S.Body></S.Body>
    </S.Container>
  );
};

export default ViewChallenges;
