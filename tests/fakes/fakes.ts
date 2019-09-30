import { Board } from "../../src/code/models";

export const boardDraw: Board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["O", "X", "O"]
];

export const boardPlaying: Board = [
    ["X", "X", ""],
    ["", "", ""],
    ["", "", ""]
];

export const boardWonVertical: Board = [
    ["X", "", ""],
    ["X", "", ""],
    ["X", "", ""]
];

export const boardWonHorizontal: Board = [
    ["X", "X", "X"],
    ["", "", ""],
    ["", "", ""]
];

export const boardWonLeftDiagonal: Board = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
];

export const boardWonRightDiagonal: Board = [
    ["", "", "X"],
    ["", "X", ""],
    ["X", "", ""]
];

