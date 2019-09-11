import { isGameWon, Board, isGameDraw } from "../../src/code/boardHelper";

const boardWonHorizontal: Board = [
    ["X", "X", "X"],
    ["", "", ""],
    ["", "", ""]
];


const boardWonLeftDiagonal: Board = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
];


const boardWonRightDiagonal: Board = [
    ["", "", "X"],
    ["", "X", ""],
    ["X", "", ""]
];

const boardWonVertical: Board = [
    ["X", "", ""],
    ["X", "", ""],
    ["X", "", ""]
];

const boardDraw: Board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["O", "X", "O"]
];

const boardPlaying: Board = [
    ["X", "X", ""],
    ["", "", ""],
    ["", "", ""]
];

test('isGameWon_WithGameWon_ReturnsTrue', () => {
    expect(isGameWon(boardWonLeftDiagonal)).toBe(true);
    expect(isGameWon(boardWonRightDiagonal)).toBe(true);
    expect(isGameWon(boardWonHorizontal)).toBe(true);
    expect(isGameWon(boardWonVertical)).toBe(true);
});

test('isGameWon_WithGameDraw_ReturnsFalse', () => {
    expect(isGameWon(boardDraw)).toBe(false);
});

test('isGameWon_WithGamePlaying_ReturnsFalse', () => {
    expect(isGameWon(boardPlaying)).toBe(false);
});

test('isGameDraw_WithGameWon_ReturnsFalse', () => {
    expect(isGameDraw(boardWonLeftDiagonal)).toBe(false);
});

test('isGameDraw_WithGameDraw_ReturnsTrue', () => {
    expect(isGameDraw(boardDraw)).toBe(true);
});

test('isGameDraw_WithGamePlaying_ReturnsFalse', () => {
    expect(isGameDraw(boardPlaying)).toBe(false);
});
