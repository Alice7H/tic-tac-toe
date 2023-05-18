import { Player } from "./../types/player";
import { capitalizeFirstWord } from "./capitalize-first-word";

let player1: Player;
let player2: Player;

export const isValidForm = (p1:Player, p2: Player) => {
  player1 = p1;
  player2 = p2;
  return hasEmoji()
  && isEmojiValid()
  && hasPlayersName()
  && isPlayersNameEquals();
}

export const isEmojiValid = () => {
  if(player1.emoji !== player2.emoji) return true;

  alert("Emojis iguais não são permitidos.");
  return false;
}

export const isPlayersNameEquals = () => {
  if(capitalizeFirstWord(player1.name) !== capitalizeFirstWord(player2.name)) return true;

  alert("Os jogadores com nomes iguais não são permitidos.");
  return false;
}

export const hasEmoji = () => {
  if(player1.emoji.length > 0 && player2.emoji.length > 0) return true;

  alert("Os jogadores precisam de um emoji.");
  return false;
}

export const hasPlayersName = () => {
  if(player1.name.length > 0 && player2.name.length > 0) return true;

  alert("Os jogadores precisam de nome.");
  return false;
}