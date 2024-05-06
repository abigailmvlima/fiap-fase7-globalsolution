import styled, { css } from 'styled-components';
import themes from 'themes/index';

const cssActive = css`
  font-weight: 900;
  font-size: 19px;
  font-family: ${themes.fontFamily.koulen};
  letter-spacing: 2.76px;
  color: ${themes.colors.v8};

  &:hover {
    color: #a457ed;
  }

  &:active {
    color: #64368e;
  }
`;

const cssDesactive = css`
  font-weight: 100;
  letter-spacing: 2.76px;
  font-family: ${themes.fontFamily.koulen};
  font-size: 19px;
  color: #272727;

  &:hover {
    color: #a457ed;
  }

  &:active {
    color: #64368e;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

interface IButton {
  active: boolean;
}

export const Button = styled.div<IButton>`
  display: flex;
  cursor: pointer;
  margin: 8px 30px;
  text-transform: uppercase;
  ${(p: IButton) => (p.active == true ? cssActive : cssDesactive)};
  color: #565656;
  font-family: ${themes.fontFamily.koulen};
`;
