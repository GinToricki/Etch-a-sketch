const etch = document.querySelector('.etch')
const createNewGridBtn = document.querySelector('.create-new-grid-btn');
const rgbFadeBtn = document.querySelector('.rgb-fade');
const rgbBtn = document.querySelector('.rgb');
let gridSize = 16;
let color = "black";
let num = [1,1,1]
let maxRed = 255;
let maxGreen = 255;
let maxBlue = 255;
let choice = 1;

rgbBtn?.addEventListener('click', () => {
  choice = 3;
  deleteGrid();
  createGrid();
})

rgbFadeBtn?.addEventListener('click', () => {
  choice = 2;
  deleteGrid();
  createGrid();
})

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
        case 2:
          addEffectRGBFade(div);
          break;
        case 3:
          addEffectRGB(div)
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

function addEffectRGB(div:HTMLElement) {
  div.addEventListener('mouseover', () => {
    div.style.cssText = `background-color: rgba(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()* 255)} ${Math.floor(Math.random()* 255)}); flex: 1 0 ${(1/gridSize)*100}%`
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