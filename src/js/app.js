import Game from "./game/game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".game"));

  /* */
  setInterval(() => {
    game.changePosition();
    console.log("interval");
  }, 1000);
});
