import React, { useState } from "react";
import "./game.css";

const initialBoard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"], //0 indexes
  ["P", "P", "P", "P", "P", "P", "P", "P"], // 1
  [null, null, null, null, null, null, null, null], //2
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

const pieceSymbols = {
    'R': '♜', 'Kn': '♞', 'B': '♝', 'Q': '♛', 'K': '♚', 'P': '♟',
    'r': '♖', 'kn': '♘', 'b': '♗', 'q': '♕', 'k': '♔', 'p': '♙'
};

// 1, 2, 3, 4
// 1, 2, 3, 4
// 1, 2, 3, 4
// 1, 2, 3, 4
function Game() {
  const [board, setBoard] = useState(initialBoard);
  return (
    <div className="chessboard-container">
      {board.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          <div
            className="cell-piece"
            key={`${rowIndex}-${cellIndex}`}
            style={{ gridRow: rowIndex + 1, gridColumn: cellIndex + 1 }}
          >
            text
    {/*expression ? works if true       :  works if false*/}
            {cell ? <span>{cell}</span> : null}
          </div>;
        })
      )}
    </div>
  );
}

export default Game;
