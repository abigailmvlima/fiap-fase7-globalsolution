import { EButtonType } from 'domains/enums/EButtons';
import styled from 'styled-components';
import themes from 'themes/index';

interface IContainerProps {
  type: EButtonType;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  background-color: #F9A300;

  border: 2px solid #e39401;

  border-radius: 15px;
  height: 47px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #cf8f1a;
  }

  &:active {
    background-color: #a57314;
  }
`;

interface ITitleProps {
  type: EButtonType;
}

export const Title = styled.div<ITitleProps>`
  display: flex;
  text-align: center;
  font-size: 25px;
  font-family: ${themes.fontFamily.inter};
  font-weight: 500;
  letter-spacing: 1px;
  margin: 10px;
  flex-wrap: wrap;
  line-height: 35px;

  color: #fff;
`;
