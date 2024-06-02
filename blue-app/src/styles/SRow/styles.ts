import { IStRow } from "@domain/interfaces/IStyles";
import styled from "styled-components/native";

export const Container = styled.View<IStRow>`
  display: flex;
  ${p => p.width && `width:${p.width}`};
  ${p => p.height && `height:${p.height}`};
  ${p => p.flexDirection && `flex-direction:${p.flexDirection}`};
  ${p => p.padding && `padding:${p.padding}`};
  ${p => p.margin && `margin:${p.margin}`};
`;
