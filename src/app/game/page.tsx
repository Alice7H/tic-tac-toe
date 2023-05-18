"use client"

import { useState } from "react";
import { Board } from "../container/board";
import { Button } from "../components/button";
import { usePlayers } from "../hooks/usePlayers";
import { useRouter } from "next/navigation";
import { PanelPlayers } from "../components/panel-players";
import { Player } from "../types/player";
import { Title } from "../components/title";

export default function Game () {
  const {players} = usePlayers();
  const router = useRouter();
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);

  const handleRestartGame = () => {
    setSquares(Array(9).fill(""));
    setIsXNext(true);
  }

  const handlePlay = (nextSquares: string[]) => {
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  return(
    <main className="flex min-h-screen flex-col items-center justify-center pt-4">
      <Title/>
      <div className="my-2">
        { players.length > 0 && players.map((player: Player, index: number) => <PanelPlayers player={player} index={index+1} key={player.id}/>)}
      </div>
      <Board
        onPlay={handlePlay}
        isXNext={isXNext}
        squares={squares}
        players={players}
      />
      <div className="flex justify-center items-center gap-4 mb-2">
        <Button onClick={() => router.back()} value="Voltar"/>
        <Button onClick={handleRestartGame} value="Reiniciar Jogo" />
      </div>
    </main>
  );
}