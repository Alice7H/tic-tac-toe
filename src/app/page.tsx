"use client"

import { PlayersForm } from "./container/players-form";
import { usePlayers } from "./hooks/usePlayers";
import { Player } from "./types/player";
import { PanelPlayers } from "./components/panel-players";

export default function Home() {
  const {players} = usePlayers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-4">
      <h1 className="text-slate-900 text-3xl font-extrabold mb-2">❌ Tic Tac Toe 🌕</h1>
      <div className="my-2">
        { players.length > 0 && players.map((player: Player, index: number) =><PanelPlayers player={player} index={index+1} key={player.id}/>)}
      </div>
      <PlayersForm/>
    </main>
  )
}
