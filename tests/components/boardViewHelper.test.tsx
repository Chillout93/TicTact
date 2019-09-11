import { isGameWon, Board, isGameDraw } from "../../src/code/boardHelper";
import { drawGame, drawTable, drawTitle } from "../../src/components/boardViewHelper";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { AssertionError } from "assert";
import { HandleBoardSizeOnClick } from "../../src/App";

configure({ adapter: new Adapter() });


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

test('drawGame_WithGameWon_ReturnsWonGameText', () => {
    const result = shallow(drawGame(boardWonVertical, "X", null));
    expect(result.text()).toBe("O has won the game!");
});

test('drawGame_WithGamePlaying_ReturnsTheBoardAsTable', () => {
    const result = shallow(drawGame(boardPlaying, "X", null));

    expect(result.findWhere(x => x.text() === "X").hostNodes().length).toBe(2);
    expect(result.find("td").length).toBe(9);
});

test('drawGame_WithGameDraw_ReturnsGameDrawText', () => {
    const result = shallow(drawGame(boardDraw, "X", null));
    expect(result.text()).toBe("Nobody has won the game!");
});

test('drawGame_WithCellOnClick_CallsPassedInMethod', () => {
    const method = jest.fn();
    const result = shallow(drawGame(boardPlaying, "X", method));
    result.find("td").forEach(x => x.simulate("click"));

    // 7 not 9 because onClick not set to cells already with a value.
    expect(method.mock.calls.length).toBe(7);
});

test('drawTitle_WithIncreaseBoardSize_IncreasesInputBy1', () => {
    const method = jest.fn();
    const result = shallow(drawTitle(1, method));

    result.find("#increaseButton").simulate("click");
    expect(method.mock.calls[0][0]).toBe(2);
});

test('drawTitle_WithDecreaseBoardSize_DecreasesInputBy1', () => {
    const method = jest.fn();
    const result = shallow(drawTitle(1, method));

    result.find("#decreaseButton").simulate("click");
    expect(method.mock.calls[0][0]).toBe(0);
});