const gridContainer = document.querySelector('.grid-container');
let root = document.querySelector(':root');
let rootStyles = root.style;
let gridRows = getComputedStyle(root).getPropertyValue('--grid-rows');
let gridCols = getComputedStyle(root).getPropertyValue('--grid-columns');



let slider = document.querySelector('#px-range');
let slidePx = document.querySelectorAll('.px');
let sliderVal = slider.value;

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


let changeColor = (e) => {
    if(e.target.className = 'grid-item');
    e.target.style.backgroundColor = 'black';
}
  

let sliderDisplay = () => {
    for (let i = 0; i < slidePx.length; i++) {
        slidePx[i].textContent = slider.value;
    }
}

let moveColor = () => {
    gridContainer.addEventListener('mouseover', changeColor);
}
let stopColor = () => {
    gridContainer.removeEventListener('mouseover', changeColor);
}
gridContainer.onmousedown = moveColor;
gridContainer.onmouseup = stopColor;

slider.onchange = changeRowColumn;
slider.oninput = sliderDisplay;

