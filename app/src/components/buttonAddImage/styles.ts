import styled from 'styled-components/native';
import PlusCircle from '../../assets/svg/plusCircle.svg'; // Ajuste o caminho conforme necessário

export const Container = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;  
`;

export const Base = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #3c5a92;
  border-radius: 5px;
  width: 100%;
  height: 200px;
  position: relative;
`;

export const Icon = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 45%;
  z-index: 10;
`;

export const IconPlus = styled(PlusCircle)`
  width: 72px;
  height: 72px;
`;

export const StyledText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

export const ImageBackground = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 1;
`;
