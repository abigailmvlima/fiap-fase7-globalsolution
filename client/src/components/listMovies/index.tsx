import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { TListMovie } from 'domains/types/TListMovie';
import ItemMovie from 'components/itemMovie';

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
