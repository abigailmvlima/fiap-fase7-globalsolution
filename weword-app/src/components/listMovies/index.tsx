import { TListMovie } from '@domain/types/TListMovie';
import * as S from './styles';
import ItemMovie from '@components/itemMovie';

type TProps = {
  data?: TListMovie[];
};

const ListMovies = ({ data }: TProps) => {
  return (
    <S.Container>
      {data && data.map((movie: TListMovie, key: number) => (
        <ItemMovie
          key={key}
          data={movie}
        />
      ))}
    </S.Container>
  );
};

export default ListMovies;
