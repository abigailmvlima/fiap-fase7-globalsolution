import themes from '@themes/themes';
import styled from 'styled-components/native';

export const Container = styled.View<{ themeSelected: string }>`
  flex: 1;
  background-color: ${({ themeSelected }) => themeSelected === 'dark' ? '#333' : '#f0f0f0'};
  padding: 20px;
`;

export const Contents = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #007bff;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: #555;
  margin-bottom: 20px;
`;

export const Form = styled.View`
  width: 100%;
`;

export const Buttons = styled.View`
  margin-top: 20px;
  width: 100%;
  align-items: center;
`;

export const Button = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const InputForm = styled.View`
  flex-direction: row;  
`;

export const InputFormCol1 = styled.View`
  flex-direction: column;
  flex-grow: 2;  
  margin-right: 15px;
`;

export const InputFormCol2 = styled.View`
  flex-direction: column;
  flex-grow: 2;  
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
