import { Component } from "react";
import { drawGame, drawTitle } from "./components/boardViewHelper";
import { Square, Board, BoardState, HandleCellOnClickFunction, HandleBoardSizeOnClick } from "./code/models";
import * as React from "react";


export default class App extends Component<{}, BoardState> {
    state = {
        currentPiece: "X" as Square,
        board: [...Array(3).keys()].map(_ => [...Array(3).keys()].map(_ => "" as Square))
    }

    render() {
        const { board, currentPiece } = this.state;

        return <React.Fragment>
            {drawTitle(board.length, this.handleBoardSizeClick)}
            {drawGame(board, currentPiece, this.handleCellOnClick)}
        </React.Fragment>
    }

    handleCellOnClick: HandleCellOnClickFunction = (board: Board, piece: Square, ycord: number, xcord: number): void => {
        board[ycord][xcord] = piece;
        this.setState({ board: board, currentPiece: (piece === "X") ? "O" : "X" });
    }

    handleBoardSizeClick: HandleBoardSizeOnClick = (boardSize: number) => {
        const newBoard = [...Array(boardSize).keys()].map(_ => [...Array(boardSize).keys()].map(_ => "" as Square));
        this.setState({ board: newBoard });
    }
}
