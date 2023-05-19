interface Props {
  value: string;
  onSquareClick: () => void;
}

export function Square({value, onSquareClick}: Props) {
  return(
    <button
      type="button"
      className="font-bold text-2xl square w-12 h-12 md:w-32 md:h-32 border-2 border-slate-800"
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}