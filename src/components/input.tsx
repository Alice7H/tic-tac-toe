import { ChangeEvent, InputHTMLAttributes } from "react";
import { Player } from "../types/player";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  setPlayers: (player: Player, event: ChangeEvent<HTMLInputElement>) => void;
  player: Player;
  value: string;
}

export function Input ({id, value, label, setPlayers, player,...rest}: Props) {

  return(
    <div className="my-2 flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type="text" id={id} name={id}
        className="border border-slate-600 rounded p-1"
        onChange={(e)=> setPlayers(player, e)}
        value={value}
        {...rest}
      />
    </div>
  );
}