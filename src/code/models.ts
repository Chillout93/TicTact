export type Square = "X" | "O" | "";
export type Board = Square[][];

export type BoardState = {
    currentPiece: Square,
    board: Board
};

export type HandleCellOnClickFunction = (board: Board, piece: Square, ycord: number, xcord: number) => void;
export type HandleBoardSizeOnClick = (boardSize: number) => void;