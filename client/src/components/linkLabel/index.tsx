import { MouseEventHandler } from 'react';
import * as S from './styles';

type TProps = {
  label: string;
  onClick?: MouseEventHandler<any> | undefined;
};

const LinkLabel = ({ label, onClick }: TProps) => {
  return (
    <S.Container>
      <S.Content onClick={onClick}>
        <S.Titulo>{label}</S.Titulo>
      </S.Content>
    </S.Container>
  );
};

export default LinkLabel;
