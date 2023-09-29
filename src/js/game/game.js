export default class Game {
  constructor(element, size = 4) {
    this.field = element;
    this.cells = [];
    this.size = size;
    this.init();
  }

  init() {
    for (let i = 0; i < this.size; i++) {
      const row = document.createElement("div");
      row.classList.add("game__row");
      for (let j = 0; j < this.size; j++) {
        const cell = document.createElement("div");
        cell.classList.add("game__cell");
        this.cells.push(cell);
        row.appendChild(cell);
      }
      this.field.appendChild(row);
    }
  }

  changePosition() {
    const current = this.field.querySelector(".game__cell_active");
    let current_index = this.cells.findIndex((element) =>
      element.isEqualNode(current)
    );
    if (current) {
      current.classList.remove("game__cell_active");
    }
    let new_index = current_index;
    while (new_index === current_index) {
      new_index = Math.floor(Math.random() * this.cells.length);
    }
    this.cells[new_index].classList.add("game__cell_active");
  }
}
