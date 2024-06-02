import styled from 'styled-components/native';

interface IContainer {
  size: number | string;
}

export const Container = styled.View<IContainer>`
  display: flex;
  flex-direction: column;
  background-color: #2F5E96;
  height: 59px;
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  padding-left: 3px;
  padding-right: 3px;
  width: ${(p) => p.size};
`;

export const Select = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  display: flex;
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
`;
