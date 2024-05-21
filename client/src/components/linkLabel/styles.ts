import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Titulo = styled.div`
  display: flex;
  color: ${themes.colors.v3};
  text-align: center;
  font-size: 16px;
  font-family: ${themes.fontFamily.inter};
  font-weight: 200;
  letter-spacing: 1px;
  flex-wrap: wrap;
  margin: 4px 4px;
  cursor: pointer;
`;
