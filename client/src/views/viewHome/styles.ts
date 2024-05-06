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
  background-color: #fdfffb;
  border: 1px solid #dce5d8;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 100px;
`;

export const IconEcoMiles = styled.img`
  display: flex;
  width: 30%;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 1px;
  width: 40%;
  margin: 0 3%;
`;

export const ButtonTitle = styled.div`
  display: flex;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #54585c;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const ButtonImage = styled.div`
  display: flex;
`;

export const ButtonImg = styled.img`
  display: flex;
  width: 100%;
`;

export const ButtonRules = styled.div`
  display: flex;
  margin: 0 15.5%;
  font-size: 23px;
  font-family: 'Roboto';
  font-weight: 200;
  letter-spacing: 2px;
  color: #585858;
  text-align: justify;
  line-height: 32px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const TitleBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10%;
  margin-bottom: 40px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #212121;
  margin: 5px;
  text-align: center;
`;

export const SubTitle = styled.div`
  display: flex;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 200;
  letter-spacing: 2px;
  color: #585858;
  margin: 5px;
  text-align: center;
  line-height: 34px;
  margin-bottom: 30px;
`;
