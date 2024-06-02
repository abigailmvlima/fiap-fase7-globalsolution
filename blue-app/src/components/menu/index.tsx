import { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import { ContextNavigation } from '@context/contextNavigation';
import { TNavigation } from '@domain/types/TNavigation';

import { ContextTheme } from '@context/contextTheme';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import * as S from './styles';
import show from '@show/index';
import svg from '@assets/svg';

const Menu = () => {
  const { theme } = useContext<IContextTheme>(ContextTheme);
  const { route, history } = useContext<TNavigation>(ContextNavigation);

  if (![show.route.home, show.route.details].includes(history.route)) {
    return <></>;
  }

  return (
    <S.Container themeSelected={theme}>
      <S.Content>
        <TouchableOpacity onPress={route.home}>
          {[show.route.home].includes(history.route) ? (
            <S.Photo>
              <Image
                source={require('../../assets/images/photoUser.png')}
                style={{ width: '100%' }}
                resizeMode="contain"
              />
            </S.Photo>
          ) : (
            <S.Photo>
              <svg.ArrowBack />
            </S.Photo>
          )}
        </TouchableOpacity>
        <S.Title>
          <TouchableOpacity onPress={route.login}>
            <svg.LogoTextWhite />
          </TouchableOpacity>
        </S.Title>

        <TouchableOpacity onPress={route.home}>
          <S.Col></S.Col>
        </TouchableOpacity>
      </S.Content>
    </S.Container>
  );
};

export { Menu };
