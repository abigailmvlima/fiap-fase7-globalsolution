import { MouseEventHandler } from 'react';
import * as S from './styles';

type TProps = {
  onClick?: MouseEventHandler | undefined;
};

const ButtonGoogle = ({ onClick }: TProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.IcoGoogle src={require('../../assets/png/icoGoogle.png')} />
      <S.Title>Login via Google</S.Title>
    </S.Container>
  );
};

export default ButtonGoogle;
