import { ITheme } from '@domain/interfaces/ITheme';
import themes from '@themes/themes';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView<ITheme>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => themes[p.themeSelected].colors.v1};
`;

export const Contents = styled.View`
  display: flex;
  margin: 0 4%;
  flex-grow: 1;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const FooterBase = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 45px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const TitleFooter = styled.Text`
  display: flex;
  font-family: 'Itim_400Regular';
  font-size: 16px;
  color: #717070;
`;

export const TitleFooterSpan = styled.Text`
  display: flex;
  font-size: 16px;
  color: ${themes.default.colors.v10};
  margin: 0 5px;
  font-family: 'Itim_400Regular';
`;

export const Title = styled.Text`
  display: flex;
  font-family: 'Itim_400Regular';
  font-size: 36px;
  color: #717070;
`;

export const Logo = styled.View`
  display: flex;
  margin-top: 25px;  
`;

export const LogoText = styled.View`
  display: flex;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 15px;
  flex-grow: 1;
  & > :nth-child(1) {
    width: 150px;
    height: 150px;
  }
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 35px;
  align-items: center;
`;

export const Button = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 8px 0;
`;

