import { TaksModel } from "./TaksModel";
 
export type TaskStateModel = {
  task: TaksModel[]; // Historico, MainForm
  secondsRemaining: number; // CountDown. Historico, MainForm, Button
  formattedSecondsRemaining: string; // Titulo, countDown
  activeTask: TaksModel | null; // CountDown. Historico, MainForm, Button
  currentCycle: number; // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBrakeTime: number; // MainForm
  };
};
