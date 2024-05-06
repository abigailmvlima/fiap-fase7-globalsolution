import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const ButtonGoHome = () => {
  const navigate = useNavigate();

  return (
    <S.Container
      onClick={() => {
        navigate('/');
      }}
    >
      <S.Title>Home</S.Title>
    </S.Container>
  );
};

export default ButtonGoHome;
