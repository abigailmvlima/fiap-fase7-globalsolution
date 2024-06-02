import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background-color: #f0f0f0;
`;

export const IncidentBox = styled.View<{ borderColor: string }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  border-left-width: 5px;
  margin-bottom: 10px;
  border-left-color: ${props => props.borderColor};
  
`;

export const IncidentText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const PercentageText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Red = '#F44336';
export const Orange = '#FF9800';
export const Yellow = '#FFEB3B';
export const Green = '#4CAF50';
