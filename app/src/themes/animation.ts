import styled from "styled-components";
import * as Animatable from "react-native-animatable";
import colors from "@themes/colors";

export const Animation = styled(Animatable.View)`
  background-color: ${colors.white};
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transform-origin: top;
`;

export const Space = styled(Animatable.View)`
  gap: 20px;
  padding: 10px 0;
`;
