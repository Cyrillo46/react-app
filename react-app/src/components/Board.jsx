import { Square } from "./Square";
import { useState } from "react";

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquare = squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquare);
  };

  const calculateWinner = (squares) => {
    const lines = [
      // Horizontal wins
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical wins
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal wins
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;

  winner
    ? (status = "The winner is " + winner)
    : (status = "Current turn: " + (xIsNext ? "X" : "O"));

  return (
    <>
      <h1>{status}!</h1>
      <div className="board-row">
        <Square value={squares[0]} squareClick={() => handleClick(0)} />
        <Square value={squares[1]} squareClick={() => handleClick(1)} />
        <Square value={squares[2]} squareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} squareClick={() => handleClick(3)} />
        <Square value={squares[4]} squareClick={() => handleClick(4)} />
        <Square value={squares[5]} squareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} squareClick={() => handleClick(6)} />
        <Square value={squares[7]} squareClick={() => handleClick(7)} />
        <Square value={squares[8]} squareClick={() => handleClick(8)} />
      </div>
    </>
  );
};
