import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${themes.fontFamily.inter};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5%;
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 15px;
`;

export const ButtonBack = styled.div`
  display: flex;
  background-color: #713262;
  position: absolute;
  left: -5.6%;
  bottom: 0px;
`;

export const Body = styled.div`
  display: flex;
  margin: 25px 5%;
  flex-direction: row;
`;

export const Cols = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 0 1px;
  justify-content: flex-start;
  align-items: flex-start;
`;
