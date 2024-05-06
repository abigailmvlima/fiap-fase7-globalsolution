export interface IStepControllerChecklist {
  id: number;
  label: string;
  value: boolean;
}

export interface IStepController {
  id: number;
  label: string;
  checklist: IStepControllerChecklist[];
}
