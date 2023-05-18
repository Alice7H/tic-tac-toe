"use client"
import { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from "react";
import { Player } from "../types/player";

interface PlayerContextType {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>
}

interface Props {
  children: ReactNode;
}

const initialPlayers = [
  {id: 1, name: "Player 1", emoji: "❌"},
  {id: 2, name: "Player 2", emoji: "🌕"}
];

export const PlayersContext = createContext<PlayerContextType>({} as PlayerContextType);

export default function PlayersProvider({children}: Props){
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  const values = useMemo(() => ({
      players,
      setPlayers
    }), [players]);

  return (
    <PlayersContext.Provider value={values}>
      {children}
    </PlayersContext.Provider>
  );
}
