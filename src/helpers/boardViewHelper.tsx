import * as React from "react";
import { isGameWon, isGameDraw, Board, Square } from "./boardHelper";
import { h1Style, tableStyle, tdStyle } from "../components/AppStyle";
import { HandleBoardSizeOnClick, HandleCellOnClickFunction } from "../components/App";

export const drawGame = (board: Board, currentPiece: Square, handleCellOnClick: HandleCellOnClickFunction) => {
    if (isGameWon(board))
        return drawGameWon(currentPiece === "X" ? "O" : "X");
    else if (isGameDraw(board))
        return drawGameDraw();
    else
        return drawTable(board, currentPiece, handleCellOnClick);
}

export const drawTitle = (currentSize: number, handleBoardSizeOnClick: HandleBoardSizeOnClick) =>
    <React.Fragment>
        <h1 style={h1Style}>TicTacToe</h1>
        <div style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <button onClick={(e) => handleBoardSizeOnClick(currentSize - 1)}>Decrease Board Size</button>
            <button onClick={(e) => handleBoardSizeOnClick(currentSize)}>Reset</button>
            <button onClick={(e) => handleBoardSizeOnClick(currentSize + 1)}>Increase Board Size</button>
        </div>
    </React.Fragment>;

export const drawGameWon = (piece: Square) => <h1 style={h1Style}>{piece} has won the game!</h1>;

export const drawGameDraw = () => <h1 style={h1Style}>Nobody has won the game!</h1>;

export const drawTable = (board: Board, currentPiece: Square, handleCellOnClick: HandleCellOnClickFunction) =>
    <table style={tableStyle}>
        {board.map((row, rowIndex) =>
            <tr>{row.map((cell, cellIndex) =>
                <td
                    style={{ ...tdStyle, backgroundColor: cell === "" ? "white" : "lightgrey" }}
                    onClick={() => cell === "" ? handleCellOnClick(board, currentPiece, rowIndex, cellIndex) : null}>{cell}
                </td>
            )}
            </tr>
        )}
    </table>
