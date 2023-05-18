"use client"

import { PlayersForm } from "./container/players-form";
import { usePlayers } from "./hooks/usePlayers";
import { Player } from "./types/player";
import { PanelPlayers } from "./components/panel-players";
import { Title } from "./components/title";

export default function Home() {
  const {players} = usePlayers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-4">
      <Title/>
      <div className="my-2">
        { players.length > 0 && players.map((player: Player, index: number) =><PanelPlayers player={player} index={index+1} key={player.id}/>)}
      </div>
      <PlayersForm/>
    </main>
  )
}
