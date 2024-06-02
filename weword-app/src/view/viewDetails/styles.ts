import styled from 'styled-components/native';

export const Container = styled.View<{ themeSelected: string }>`
  flex: 1;
  background-color: ${({ themeSelected }) => themeSelected === 'dark' ? '#333' : '#f0f0f0'};
  padding: 20px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const IncidentBox = styled.View`
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
`;

export const IncidentTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const IncidentDescription = styled.Text`
  font-size: 14px;
  color: #e74c3c;
  margin-top: 5px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

export const FooterBase = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleFooter = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const TitleFooterSpan = styled.Text`
  font-size: 14px;
  color: #007bff;
`;
