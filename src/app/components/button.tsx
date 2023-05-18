import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  value: string;
}

export function Button ({onClick, value, type}: Props) {
  return (
    <button
      type={type || "button"}
      className="border border-slate-900 text-white bg-indigo-600 hover:bg-indigo-700 rounded p-2"
      onClick={onClick}
    >
      {value}
    </button>
  );
}