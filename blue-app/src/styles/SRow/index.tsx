import { IStRow } from "@domain/interfaces/IStyles";
import * as St from "./styles";

const SRow = (props: IStRow) => {
  return <St.Container>{props.children}</St.Container>;
};

export { SRow };

