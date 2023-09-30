/**
 * @jest-environment jsdom
 */

import Game from "./game";

const element = document.createElement("div");
const game = new Game(element);

test("check number of cells", () => {
  expect(element.querySelectorAll(".game__row").length).toBe(4);
  expect(element.querySelectorAll(".game__cell").length).toBe(16);
});

test("change position test", () => {
  expect(element.querySelectorAll(".game__cell_active").length).toBe(0);
  let prev = element.querySelector(".game__cell_active");
  expect(prev).toBeNull();
  game.changePosition();
  for (let i = 0; i < 10; i++) {
    prev = element.querySelector(".game__cell_active");
    game.changePosition();
    const next = element.querySelector(".game__cell_active");
    expect(prev.isEqualNode(next)).toBeFalsy();
    expect(element.querySelectorAll(".game__cell_active").length).toBe(1);
  }
});
