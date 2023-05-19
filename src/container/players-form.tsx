import { ChangeEvent, FormEvent } from "react";
import { Player } from "../types/player";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { SelectEmoji } from "../components/select-emoji";
import { isValidForm } from "../utils/validation-player-form";
import { usePlayers } from "../hooks/usePlayers";
import { useRouter } from "next/navigation";

export function PlayersForm () {
  const { players, setPlayers } = usePlayers();
  const router = useRouter();
  const label = "Informe um nome para o jogador";
  const player1 = players[0];
  const player2 = players[1];

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(isValidForm(player1, player2)) router.push("/game");
  }

  const handleChange = ( player: Player, event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    event.stopPropagation();
    setPlayers(prev => prev.map(p => p.id == player.id
      ? {...player, [event.target.name]: event.target.value}
      : p
    ));
  }

  return(
    <form className="form-player flex flex-col m-2" onSubmit={onSubmit}>
      <Input
        id={"input" + player1.id}
        name="name"
        label={label + " 1:"}
        setPlayers={handleChange}
        player={player1}
        maxLength={10}
        value={player1.name}
        required
      />
      <SelectEmoji
        id={"select"+ player1.id}
        name="emoji"
        setPlayers={handleChange}
        player={player1}
      />
      <Input
        id={"input" + player2.id}
        name="name"
        label={label + " 2:"}
        setPlayers={handleChange}
        player={player2}
        maxLength={10}
        value={player2.name}
        required
      />
      <SelectEmoji
        id={"select"+ player2.id}
        name="emoji"
        setPlayers={handleChange}
        player={player2}
      />
      <Button type="submit" value="Iniciar Jogo" />
    </form>
  );
}