import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  background-color: #2F5E96;
`;

export const ImageContainer = styled.View`
  margin: 5px;
  display: flex;
  width: 150px;
  height: 100px;
  background-color: aliceblue;
`;

export const Body = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.Text`
  display: flex;
  font-size: 18px;
  color: aliceblue;
  margin: 10px 10px 0px 10px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const RowBase = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  margin-right: 5px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

export const Col = styled.View`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const Text1 = styled.Text`
  display: flex;
  font-size: 15px;
  color: aliceblue;
  margin: 5px 10px 0px 10px;
  letter-spacing: 1px;
`;

export const Text2 = styled.Text`
  display: flex;
  font-size: 15px;
  font-weight: bold;
  color: #F9A300;
  margin: 5px 10px 0px 10px;
  letter-spacing: 1px;
`;
