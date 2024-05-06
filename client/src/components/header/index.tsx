import svg from 'assets/svg';
import Menu from 'components/menu';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

type TProps = {
  activeMenu?: EActiveView;
};

const Header = ({ activeMenu }: TProps) => {
  return (
    <S.Container>
      <S.Left>
        <svg.LogoSmall />
      </S.Left>
      <S.Menu>
        <Menu active={activeMenu} />
      </S.Menu>
      <S.Right> </S.Right>
    </S.Container>
  );
};

export default Header;
