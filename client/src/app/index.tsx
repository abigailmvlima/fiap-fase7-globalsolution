import 'fontsource-inter';
import 'fontsource-lato';
import 'fontsource-lato/latin.css';
import 'fontsource-roboto';
import './index.css';
import RouteController from './routeController';

import * as S from './styles';

const App = () => {
  return (
    <S.Container>
      <S.Page>
        <RouteController />
      </S.Page>
    </S.Container>
  );
};

export default App;
