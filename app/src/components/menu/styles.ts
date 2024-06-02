import styled, { css } from 'styled-components/native';

import { ITheme } from '@domain/interfaces/ITheme';

export const Container = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  background-color: #00a6f8;
  
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 5px;
`;

export const Photo = styled.View`
  display: flex;
  flex-direction: row;  
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const Col = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
`;

export const ColText = styled.Text`
  display: flex;
  color: #3b3d40;
  margin-top: 8px;
  letter-spacing: 2px;
  text-align: center;
`;

export const Title = styled.Text`
  display: flex;
  color: #3b3d40;
  margin-top: 8px;
  letter-spacing: 2px;
  text-align: center;
`;
