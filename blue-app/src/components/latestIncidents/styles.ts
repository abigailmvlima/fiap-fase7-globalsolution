import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background-color: #F3F4F6;
`;

export const ScaleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 130px;
`;

export const ScaleText = styled.Text`
  font-size: 12px;
  color: #000;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const State = styled.Text`
  width: 30px;
  font-size: 14px;
  font-weight: bold;
`;

export const City = styled.Text`
  width: 100px;
  font-size: 14px;
`;

export const BarContainer = styled.View`
  flex: 1;
  height: 20px;
  background-color: #E0E0E0;
  border-radius: 5px;
  overflow: hidden;
`;

export const Bar = styled.View`
  height: 100%;
  border-radius: 5px;
`;
