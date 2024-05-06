import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid #858b90;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #000;
  }

  &:active {
    background-color: #000;
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-family: ${themes.fontFamily.inter};
  font-weight: 100;
  letter-spacing: 3px;
  color: #858b90;
  margin: 15px;
`;

export const IcoGoogle = styled.img`
  margin: 0 15px;
`;
