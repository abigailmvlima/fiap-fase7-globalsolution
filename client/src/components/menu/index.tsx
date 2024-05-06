import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
type TProps = {
  active?: EActiveView;
};

type TTypeMenu = {
  label: string;
  active: EActiveView;
};

const Menu = ({ active = EActiveView.home }: TProps) => {
  const navigate = useNavigate();

  const data: TTypeMenu[] = [
    {
      label: 'About',
      active: EActiveView.about,
    },
  ];

  const Button = ({
    label,
    routePath,
    active = false,
  }: {
    routePath: string;
    label?: string;
    active?: boolean;
  }) => (
    <S.Button active={active} onClick={() => navigate(`/${routePath}`)}>
      {label}
    </S.Button>
  );

  return (
    <S.Container>
      {data.map((m: TTypeMenu, key: number) => (
        <Button
          key={key}
          label={m.label}
          routePath={m.active}
          active={m.active == active}
        />
      ))}
    </S.Container>
  );
};

export default Menu;
