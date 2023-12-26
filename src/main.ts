const etch = document.querySelector('.etch')

function createGrid() {
  for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
      const div = document.createElement('div')
      div.classList.add("cell");
      etch?.appendChild(div);
    }
  }
}

createGrid();