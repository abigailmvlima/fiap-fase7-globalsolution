import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px 0;
`;

export const Left = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  display: flex;
  color: ${themes.colors.v8};
`;

export const Right = styled.div`
  display: flex;
`;
