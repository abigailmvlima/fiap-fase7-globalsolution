import * as S from './styles';
import { TListMovie } from 'domains/types/TListMovie';

type TProps = {
  data: TListMovie;
};

const ItemMovie = ({ data }: TProps) => {
  return <S.Container>
    {data.title}
    </S.Container>;
};

export default ItemMovie;
