import { EButtonType } from 'domains/enums/EButtons';
import { MouseEventHandler } from 'react';
import * as S from './styles';

type TProps = {
  label: string;
  onClick?: MouseEventHandler | undefined;
  type?: EButtonType;
};

const ButtonGo = ({ label, onClick, type = EButtonType.default }: TProps) => {
  return (
    <S.Container onClick={onClick} type={type}>
      <S.Title type={type}>{label}</S.Title>
    </S.Container>
  );
};

export default ButtonGo;
