import styled, { css } from 'styled-components';

import { EInputPosition, EInputSize } from 'domains/enums/EInput';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 15px;
  font-family: ${themes.fontFamily.inter};
  color: #000;
  letter-spacing: 2px;
  margin-left: 2px;
`;

export const Label = styled.div`
display: flex;
text-align: center;
font-size: 15px;
font-family: ${themes.fontFamily.inter};
color: #b9b9b9;
letter-spacing: 2px;
margin-left: 5px;
`;
export const Base = styled.div`
  height: 57px;
`;

interface IInput {
  showIcons?: boolean;
  size: EInputSize;
  position: EInputPosition;
}

const inputShowIconsCSS = css`
  margin-left: 8px;
`;

const inputPositionLeftCSS = css``;

const inputPositionCenterCSS = css`
  align-items: center;
  text-align: center;
`;

const inputPositionRightCSS = css`
  text-align: right;
`;

export const Input = styled.input<IInput>`
  display: flex;
  width: 100%;
  font-size: 18px;
  font-family: ${themes.fontFamily.inter};
  color: #ececec;
  border: 1px solid transparent;
  background-color: transparent;
  margin: 5px 0;
  outline: none;
  border-bottom: 2px solid #ececec;

  display: flex;
  flex-grow: 1;
  font-size: ${(p) => (p.size === EInputSize.regular ? '25px' : '20px')};
  padding: 8px;
  border-radius: 6px;
  font-weight: 900;  

  ${(p) =>
    p.position === EInputPosition.left
      ? inputPositionLeftCSS
      : p.position === EInputPosition.center
      ? inputPositionCenterCSS
      : p.position === EInputPosition.right
      ? inputPositionRightCSS
      : inputPositionLeftCSS};

  &::placeholder {
    color: #a5a9a2;
    font-weight: bold;
    font-size: 18px;
    font-family: ${themes.fontFamily.inter};
  }
`;

export const ErrorText = styled.div`
  display: flex;
  text-align: right;
  color: #b15151;
  font-size: 15px;
  letter-spacing: 1px;
  margin-right: 4px;
  height: 18px;
`;
