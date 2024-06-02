import { Animated } from 'react-native';
import styled from 'styled-components/native';


export const Contents = styled.View`
  display: flex;
  margin: 0 4%;
`;

export const SpinnerContainer = styled(Animated.View)`
  width: 100%;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
