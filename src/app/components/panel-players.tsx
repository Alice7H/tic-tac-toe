import { useRouter } from "next/navigation";
import { Button } from "./button";
import { capitalizeFirstWord } from "../utils/capitalize-first-word";
import { Player } from "../types/player";

interface Props {
  player: Player;
  index: number;
}

export function PanelPlayers ({player, index}: Props) {
  const router = useRouter();

    if(!player){
     return (
      <>
        <p className="mb-2 text-slate-800"> Erro ao carregar os jogadores, recarregue a página </p>
        <Button onClick={()=> router.refresh()} type="button" value="Recarregar"/>
      </>
     );
    }

    return (
      <p className="mb-2 text-slate-800" key={player.id}>
        O jogador {index} {capitalizeFirstWord(player.name)} começa com {player.emoji}
      </p>
    );


}