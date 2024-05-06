import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  background-color: #713262;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #954382;
  }

  &:active {
    background-color: #5f2c53;
  }
`;

export const Icon = styled.div`
  display: flex;
  margin: 10px 15px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 5px;
  margin: 8px 15px 8px 20px;
`;
