
import { drawGame, drawTable, drawTitle } from "../../src/components/boardViewHelper";
import { boardWonVertical, boardPlaying, boardDraw, boardEmpty } from "../fakes/fakes";
import { fireEvent, render } from "@testing-library/react";


test('drawGame_WithGameWon_ReturnsWonGameText', () => {
    const { getByText } = render(drawGame(boardWonVertical, "X", null));

    expect(getByText("O has won the game!")).toBeTruthy();
});

test('drawGame_WithGameDraw_ReturnsGameDrawText', () => {
    const { getByText } = render(drawGame(boardDraw, "X", null));
    expect(getByText("Nobody has won the game!")).toBeTruthy();
});

test('drawGame_WithCellOnClick_CallsPassedInMethod', () => {
    const method = jest.fn();
    const { getByTestId } = render(drawGame(boardPlaying, "X", method));

    [0, 1, 2].map(x => [0, 1, 2].map(y => fireEvent.click(getByTestId(`td-${x}-${y}`))));

    // 7 not 9 because onClick not set to cells already with a value.
    expect(method.mock.calls.length).toBe(7);
});

test('drawTitle_WithIncreaseBoardSize_IncreasesInputBy1', () => {
    const method = jest.fn();
    const { getByTestId } = render(drawTitle(1, method));

    fireEvent.click(getByTestId("increaseButton"));

    expect(method).toBeCalledWith(2);
});

test('drawTitle_WithDecreaseBoardSize_DecreasesInputBy1', () => {
    const method = jest.fn();
    const { getByTestId } = render(drawTitle(1, method));

    fireEvent.click(getByTestId("decreaseButton"));

    expect(method).toBeCalledWith(0);
});

test('should prevent clicking the same cell twice', () => {
    boardEmpty[0][0] = "X";
    const method = jest.fn();
    const { getByTestId } = render(drawTable(boardEmpty, "X", method));

    fireEvent.click(getByTestId("td-0-0"));

    expect(method).toBeCalledTimes(0);
});