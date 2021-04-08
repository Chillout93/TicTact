import * as React from "react";
import { isGameWon, isGameDraw } from "../code/boardHelper";
import { h1Style, tableStyle, tdStyle } from "../style/AppStyle";
import { HandleCellOnClickFunction, HandleBoardSizeOnClick, Square, Board } from "../code/models";

export const drawGame = (board: Board, currentPiece: Square, handleCellOnClick: HandleCellOnClickFunction) => {
    if (isGameWon(board))
        return drawGameWon(currentPiece === "X" ? "O" : "X");
    else if (isGameDraw(board))
        return drawGameDraw();
    else
        return drawTable(board, currentPiece, handleCellOnClick);
}

export const drawTitle = (currentSize: number, handleBoardSizeOnClick: HandleBoardSizeOnClick) =>
    <div>
        <h1 style={h1Style}>TicTacToe</h1>
        <div style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <button data-testid="decreaseButton" onClick={() => handleBoardSizeOnClick(currentSize - 1)}>Decrease Board Size</button>
            <button onClick={() => handleBoardSizeOnClick(currentSize)}>Reset</button>
            <button data-testid="increaseButton" onClick={() => handleBoardSizeOnClick(currentSize + 1)}>Increase Board Size</button>
        </div>
    </div>;

export const drawGameWon = (piece: Square) => <h1 style={h1Style}>{piece} has won the game!</h1>;

export const drawGameDraw = () => <h1 style={h1Style}>Nobody has won the game!</h1>;

export const drawTable = (board: Board, currentPiece: Square, handleCellOnClick: Function) =>
    <table style={tableStyle}>
        <tbody>
            {board.map((row, rowIndex) =>
                <tr key={rowIndex}>{row.map((cell, cellIndex) =>
                    <td data-testid={`td-${rowIndex}-${cellIndex}`} key={`${rowIndex}-${cellIndex}`}
                        style={{ ...tdStyle, backgroundColor: cell === "" ? "white" : "lightgrey" }}
                        onClick={() => cell === "" ? handleCellOnClick(board, currentPiece, rowIndex, cellIndex) : null}>{cell}
                    </td>
                )}
                </tr>
            )}
        </tbody>
    </table>
