import { ChangeEvent, InputHTMLAttributes } from "react";
import { Player } from "../types/player";
import { capitalizeFirstWord } from "../utils/capitalize-first-word";
import { options } from "../utils/options-emoji";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  setPlayers: (player: Player, event: ChangeEvent<HTMLSelectElement>) => void;
  player: Player;
  id: string;
}

export function SelectEmoji({id, setPlayers, player, ...rest}: Props ) {
  const playerName = capitalizeFirstWord(player.name);

  return(
    <div className="my-3 flex flex-col justify-center">
      <label htmlFor={id}>{playerName} escolha seu emoji: </label>
      <select
        className="border border-slate-600 w-full p-1 rounded"
        id={id}
        name={id}
        onChange={(e)=> setPlayers(player, e)}
        value={player.emoji}
        {...rest}
      >
        {
          options.length > 0
          && options.map(opt => <option key={opt.id} value={opt.emoji}>{opt.emoji}</option>)
        }
      </select>
    </div>
  );
}
