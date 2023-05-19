import { Player } from "../types/player";
import { Square } from "../components/square";
import { capitalizeFirstWord } from "../utils/capitalize-first-word";
import { calculateWinner } from "../utils/calculate-winner";

interface Props {
  onPlay: (value: string[]) => void;
  squares: string[];
  isXNext: boolean;
  players: Player[];
}

export function Board({onPlay, squares, isXNext, players}: Props) {
  let status: string;
  const contador = squares.filter(square => square !== "").length;
  const winner = calculateWinner(squares);

  const player1 = players[0];
  const player2 = players[1];

  const handleClick = (index: number) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[index] = player1.emoji;
    } else {
      nextSquares[index] = player2.emoji;
    }
    onPlay(nextSquares);
  }

  if (winner) {
    status = "Vencedor: " + (winner == player1.emoji
      ? capitalizeFirstWord(player1.name)
      : capitalizeFirstWord(player2.name));
  } else if(contador == 9){
    status = "Empate";
  }else{
    status = "Vez do jogador " + (
      isXNext
        ? `${capitalizeFirstWord(player1.name)} : ${player1.emoji}`
        : `${capitalizeFirstWord(player2.name)} : ${player2.emoji}`
    );
  }

  return(
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
      </div>
      <div className="my-4 text-slate-800">{status}</div>

    </>
  );
}