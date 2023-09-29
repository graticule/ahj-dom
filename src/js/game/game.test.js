/**
 * @jest-environment jsdom
 */

import Game from "./game";

test("check number of cells", () => {
  const element = document.createElement("div");
  const game = new Game(element);
  expect(element.querySelectorAll(".game__row").length).toBe(4);
  expect(element.querySelectorAll(".game__cell").length).toBe(16);
});
