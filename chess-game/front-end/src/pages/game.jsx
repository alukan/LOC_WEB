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
  R: "♜",
  N: "♞",
  B: "♝",
  Q: "♛",
  K: "♚",
  P: "♟",
  r: "♖",
  n: "♘",
  b: "♗",
  q: "♕",
  k: "♔",
  p: "♙",
};

// 1, 2, 3, 4
// 1, 2, 3, 4
// 1, 2, 3, 4
// 1, 2, 3, 4
function Game() {
  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [currentTurn, setCurrentTurn] = useState("white");

  const handleCellClick = (row, cell) => {
    const piece = board[row][cell];

    // a -> A, A->A
    // A === A black piece, a !== A white piece
    const pieceColor =
      (piece != null) ? (piece.toUpperCase() === piece ? "black" : "white") : null; // empty cell -> white

    if (selectedPiece != null) {
      if (pieceColor === currentTurn ) {
        setSelectedPiece([row, cell]);
      } // move piece only if this block did not work
      else {
        movePiece(row, cell);
      }
      //
    }
    // piece is not null (non empty), color of a piece is the same as current turn
    else if (piece != null && pieceColor === currentTurn) {
      // selectedPiece = [row, cell]
      setSelectedPiece([row, cell]);
    }
  };

  const movePiece = (row, cell) => {
    // [row, cell] - selected piece
    //  0    1
    // [3,   4]
    const selectedRow = selectedPiece[0];
    const selectedCell = selectedPiece[1];
    const piece = board[selectedRow][selectedCell];// board[3][4]

    if(piece.toUpperCase() == 'R'){
      if(row != selectedRow && cell != selectedCell){
        return;
      }
      else{
        if(row == selectedRow){
          if(cell > selectedCell){
            for(let i = selectedCell + 1; i < cell; i++){
              if(board[selectedRow][i] != null)
                return;
            }
          }
          else{

          }   
        }
      }
    }
      
    if (piece.toUpperCase() == 'B')
      if(row + cell != selectedRow + selectedCell &&  row - cell != selectedRow - selectedCell)
        return;
    
    if (piece.toUpperCase() == 'N')
      if((Math.abs(row - selectedRow) !=2  || Math.abs(cell - selectedCell)!=1) &&
     (Math.abs(row - selectedRow) !=1 || Math.abs(cell - selectedCell) != 2))
        return;
        
    if (piece.toUpperCase() == 'Q')
      if(row != selectedRow && cell != selectedCell && row + cell != selectedRow + selectedCell &&  row - cell != selectedRow - selectedCell)
        return;
      
    if (piece.toUpperCase() == 'K') // Math.abs 2 - 1 == 1 - 2
      if(Math.abs(row - selectedRow) >= 2  || Math.abs(cell - selectedCell) >=2)
      //check that there is no green dot
        return;

    if ( piece.toUpperCase() == 'P')
      if (cell != selectedCell  )
        return;

    const copyBoard = [...board]; // ... - takes elements, [] - creates new array
    
    // step 1 - remove piece from old position, step 2 - put piece in new position
    copyBoard[row][cell] = piece
    copyBoard[selectedRow][selectedCell] = null;
    
    setBoard(copyBoard) // board = copyBoard
    //delete a selection
    setSelectedPiece(null);
    if (currentTurn === 'white'){
      setCurrentTurn('black');
    }
    else{
      setCurrentTurn('white');
    }
    
  };

  return (
    <div className="chessboard-container">
      {board.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div
            //                                     setSelectedPiece([row, cell]);          [5, 6]
            className={`cell-piece ${
              selectedPiece !== null &&
              cellIndex == selectedPiece[1] &&
              rowIndex == selectedPiece[0]
                ? "selected"
                : ""
            }`}
            key={`${rowIndex}-${cellIndex}`}
            style={{ gridRow: rowIndex + 1, gridColumn: cellIndex + 1 }}
            onClick={() => handleCellClick(rowIndex, cellIndex)}
          >
            {/* <div
            className={`move-piece ${piece === selectedPiece && onClick={()=> handleCellClick(rowIndex, cellIndex)} ? movePiece : ''}`}
            > */}

            {cell === null ? null : (
              <span className="piece" style={{ color: "black" }}>
                {pieceSymbols[cell]}
              </span>
            )}
            {/*expression ? works if true       :  works if false*/}
          </div>
        ))
      )}
    </div>
  );
}

export default Game;
