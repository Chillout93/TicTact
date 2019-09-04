export type Square = "X" | "O" | "";
export type Board = Square[][];

export type BoardState = {
    currentPiece: Square,
    board: Board
};

export const isGameWon = (board: Board): Boolean => {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        for (let cellIndex = 0; cellIndex < board[rowIndex].length; cellIndex++) {
            if (board[rowIndex][cellIndex] === "")
                continue;

            if (winConditions.filter(x => isGameWonInner(board, rowIndex, cellIndex, 0, x[0], x[1])).length >= 1)
                return true;
        }
    }

    return false;
}

export const isGameDraw = (board: Board): Boolean => {
    for (const row of board)
        for (const cell of row)
            if (cell === "") return false;

    return true;
}

const winConditions: number[][] = [
    [1, -1], // Left Diagonal
    [0, 1], // Right
    [1, 1], // Right Diagonal
    [1, 0]  // Down
]

const isGameWonInner = (board: Board, rowIndex: number, cellIndex: number, matchCount: number, downDirection: number, rightDirection: number): Boolean => {
    const winningMatchCount = board.length - 1;
    if (matchCount === winningMatchCount)
        return true;

    const currentCell = board[rowIndex][cellIndex];
    const targetCell = (board.length > rowIndex + downDirection && board[rowIndex].length > cellIndex + rightDirection)
        ? board[rowIndex + downDirection][cellIndex + rightDirection]
        : null;

    if (currentCell === targetCell)
        return isGameWonInner(board, rowIndex + downDirection, cellIndex + rightDirection, matchCount + 1, downDirection, rightDirection);

    return false;
}

