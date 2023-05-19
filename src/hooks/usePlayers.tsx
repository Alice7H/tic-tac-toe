import { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

export const usePlayers = () => useContext(PlayersContext);