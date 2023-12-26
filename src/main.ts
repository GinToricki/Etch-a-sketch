const etch = document.querySelector('.etch')
const createNewGridBtn = document.querySelector('.create-new-grid-btn');
let gridSize = 16;
let color = "black";
let num = [1,1,1]
let maxRed = 280;
let maxGreen = 280;
let maxBlue = 280;
let choice = 1;

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
      div.style.cssText = `flex: 1 0 ${(1/gridSize)*100}%`;
      switch(choice) {
        case 1 :
          addEffect(div);
          break;
          default:
            console.log("Error")
            break;
      }
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

function addEffectRGBFade(div:HTMLElement) {
  div.addEventListener('mouseover', () => {
    div.style.cssText = `background-color: rgba(${Math.floor(Math.random()*changeMaxRed())} ${Math.floor(Math.random()* changeMaxGreen())} ${Math.floor(Math.random()* changeMaxBlue())}); flex: 1 0 ${(1/gridSize)*100}%`
  })
}

function addEffect(div:HTMLElement) {
  div.addEventListener('mouseover', () => {
    div.style.cssText = `background-color: ${color}; flex: 1 0 ${(1/gridSize)*100}%`
  })
}

function changeMaxRed() {
  maxRed = maxRed - 25
  return maxRed;
}

function changeMaxGreen() {
  maxGreen = maxGreen - 25
  return maxGreen;
}

function changeMaxBlue() {
  maxBlue = maxBlue - 25
  return maxBlue;
}

createGrid();