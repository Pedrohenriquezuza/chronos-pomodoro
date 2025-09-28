import { DefaultInput } from "../DefaultInput/index.tsx";
import { Cycles } from '../Cycles/index.tsx';
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";

export function MainForm() {
  return (
    <form className="form " action="#">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite Algo..."
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
