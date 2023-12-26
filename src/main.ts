const etch = document.querySelector('.etch')
const createNewGridBtn = document.querySelector('.create-new-grid-btn');
let gridSize = 16;

createNewGridBtn?.addEventListener('click', () => {
  deleteGrid();
  do {
    gridSize = parseInt(prompt()!);
  }while(gridSize < 0 || gridSize > 100)
  createGrid();
})

function createGrid() {
  for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
      const div = document.createElement('div')
      div.classList.add("cell");
      div.style.cssText = `flex: 1 0 ${(1/gridSize)*100}%`
      addEffect(div);
      etch?.appendChild(div);
    }
  }
}

function deleteGrid() {
  for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
      const div = document.querySelector('.cell');
      etch?.removeChild(div!);
    }
  }
}

function addEffect(div:Element) {
  div.addEventListener('mouseover', () => {
    div.classList.add("active");
  })
}

createGrid();