import svg from 'assets/svg';
import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${themes.fontFamily.inter};
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-direction: row;
  background-color: #01234B;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.div`
  display: flex;
  width: 600px;  
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const LogoCine = styled.img`
  display: flex;
  width: 80%;
`;


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: 0 50px 0 60px;
  padding: 50px 0;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IconEcoMiles = styled.img`
  display: flex;
  width: 80%;
`;

export const Input = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const Forgot = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 0;
`;

export const Registers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Or = styled.div`
  display: flex;
  margin: 30px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${themes.colors.v3};
`;

export const LinkLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
