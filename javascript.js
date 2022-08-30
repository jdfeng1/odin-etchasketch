const gridContainer = document.querySelector('.grid-container');
let root = document.querySelector(':root');
let rootStyles = root.style;
let gridRows = getComputedStyle(root).getPropertyValue('--grid-rows');
let gridCols = getComputedStyle(root).getPropertyValue('--grid-columns');

let slider = document.querySelector('#px-range');
let slidePx = document.querySelectorAll('.px');
let sliderVal = slider.value;

let clearButton = document.querySelector("#clear");

rootStyles.setProperty('--grid-rows', sliderVal);
rootStyles.setProperty('--grid-columns', sliderVal);
for (let i = 0; i < sliderVal * sliderVal; i++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = `grid-item`;// grid${i}`;
}
for (let i = 0; i < slidePx.length; i++) {
    slidePx[i].textContent = slider.value;
}


let changeRowColumn = () => {
    sliderVal = slider.value;
    gridContainer.replaceChildren();
    rootStyles.setProperty('--grid-rows', sliderVal);
    rootStyles.setProperty('--grid-columns', sliderVal);
    for (let i = 0; i < sliderVal*sliderVal; i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = `grid-item`;// grid${i}`;
    }
}

function toggle(button) {
    if (button.value == "OFF") {   
      button.value = "ON";
      button.classList.add('toggled');
      console.log(button.value);
    } else { 
      button.value = "OFF";
      button.classList.remove('toggled');
      console.log(button.value);
    }
  }
  

let changeColor = (e) => {
    if(e.target.className = 'grid-item');
    e.target.style.backgroundColor = 'black';
    gridContainer.addEventListener('mouseover', changeColor);
}
  

let sliderDisplay = () => {
    for (let i = 0; i < slidePx.length; i++) {
        slidePx[i].textContent = slider.value;
    }
}

let stopColor = () => {
    gridContainer.removeEventListener('mouseover', changeColor);
}
gridContainer.onmousedown = changeColor;
gridContainer.onmouseup = stopColor;

/*const buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach(play => play.addEventListener('click', (e) => e.target.classList.add('toggled')));*/



clearButton.addEventListener('click', changeRowColumn);
slider.onchange = changeRowColumn;
slider.oninput = sliderDisplay;

