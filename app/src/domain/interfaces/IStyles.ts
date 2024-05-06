
export enum EFlexDirection {
  'row' = 'row',
  'column' = 'column'
}

export interface IStRow {
  flexDirection?: EFlexDirection
  width?: string | number;
  height?: string | number;
  padding?: string;
  margin?: string;
  paddingTop?: string | number;
  children?: any;
}
