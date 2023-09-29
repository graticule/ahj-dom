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
  expect(element.querySelectorAll('.game__cell_active').length).toBe(0);
  for(let i=0; i < 10; i++){
    const prev = element.querySelector('.game__cell_active');  
    game.changePosition();
    const next = element.querySelector('.game__cell_active');
    if(prev){
      expect( prev.isEqualNode(next)).toBeFalsy();
    } else {
      expect(prev).toBeNull();
      expect(next).not.toBeNull();
    }
    expect(element.querySelectorAll('.game__cell_active').length).toBe(1);
  }
})
