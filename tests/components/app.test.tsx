import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import App from "../../src/app";

test('render2_withPlayerClickingCell_setsCellToCurrentPlayerAndChangesPlayer', () => {
    const { getByTestId } = render(<App />);

    const firstTd = getByTestId("td-0-0");
    fireEvent.click(firstTd);
    expect(firstTd.textContent).toBe("X");

    const secondTd = getByTestId("td-0-1");
    fireEvent.click(secondTd);
    expect(secondTd.textContent).toBe("O");
});

test('render_withPlayerClickingSameCellTwice_onlyCallsMethodOnce', () => {
    render(<App />);

    const firstTd = screen.getByTestId("td-0-0");
    fireEvent.click(firstTd);
    fireEvent.click(firstTd);
    expect(firstTd.textContent).toBe("X");
});