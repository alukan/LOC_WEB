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
    'R': '♜', 'N': '♞', 'B': '♝', 'Q': '♛', 'K': '♚', 'P': '♟',
    'r': '♖', 'n': '♘', 'b': '♗', 'q': '♕', 'k': '♔', 'p': '♙'
};

// 1, 2, 3, 4
// 1, 2, 3, 4
// 1, 2, 3, 4
// 1, 2, 3, 4
function Game() {
  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [currentTurn, setCurrentTurn] = useState('white');

  const handleCellClick = (row, cell) => {
    const piece = board[row][cell];

    // a -> A, A->A
    // A === A black piece, a !== A white piece
    const pieceColor = piece && piece.toUpperCase() === piece ? 'black' : 'white'; 

    if(selectedPiece !== null){
      if (pieceColor === currentTurn){
        setSelectedPiece([row, cell]);
      }
    }
    // piece is not null (non empty), color of a piece is the same as current turn
    else if(piece !== null && pieceColor === currentTurn) {
      // selectedPiece = [row, cell]
      setSelectedPiece([row, cell]);
      
    } 


  }

  return (
    <div className="chessboard-container">
      {board.map((row, rowIndex) =>
        row.map((cell, cellIndex) => 
          <div
          //                                     setSelectedPiece([row, cell]);          [5, 6]
            className={`cell-piece ${selectedPiece !== null && cellIndex == selectedPiece[1] && rowIndex == selectedPiece[0] ? 'selected' : '' }`}
            key={`${rowIndex}-${cellIndex}`}
            style={{ gridRow: rowIndex + 1, gridColumn: cellIndex + 1 }}
            onClick={() => handleCellClick(rowIndex, cellIndex)}
            >
              
            
            {cell === null ? null : <span 
              className="piece"  
              style={{color: 'black'}}>
              {pieceSymbols[cell]}
              
            </span>}
    {/*expression ? works if true       :  works if false*/}
            

          </div>
        )
        )}
    </div>
  );
}



export default Game;
