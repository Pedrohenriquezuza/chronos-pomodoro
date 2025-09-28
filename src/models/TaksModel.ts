import { TaskStateModel } from "./TaskStateModel";

export type TaksModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // Quando o timer chegar no final
  interruptDate: number | null;
  type: keyof TaskStateModel['config'];
};
