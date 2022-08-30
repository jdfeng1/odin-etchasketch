const gridContainer = document.querySelector('.grid-container');
let root = document.querySelector(':root');
let rootStyles = root.style;
let gridRows = getComputedStyle(root).getPropertyValue('--grid-rows');
let gridCols = getComputedStyle(root).getPropertyValue('--grid-columns');

let slider = document.querySelector('#px-range');
let slidePx = document.querySelectorAll('.px');
let sliderVal = slider.value;

let shaderButton = document.querySelector('#shader-mode');
let pencilButton = document.querySelector('#pencil-mode');
let rainbowButton = document.querySelector('#rainbow-mode');
let clearButton = document.querySelector("#clear");
let colorBox = document.querySelector('.colorbox');

rootStyles.setProperty('--grid-rows', sliderVal);
rootStyles.setProperty('--grid-columns', sliderVal);
for (let i = 0; i < sliderVal * sliderVal; i++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = `grid-item`;// grid${i}`;
}
for (let i = 0; i < slidePx.length; i++) {
    slidePx[i].textContent = slider.value;
}



function toggle(button) {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(b => {
        if (b.className == 'toggled') {
            b.classList.remove('toggled');
            b.value = 'OFF';
        }
        return;
    });

    if (button.value == "OFF") {   
      button.value = "ON";
      button.classList.add('toggled');
    } else { 
      button.value = "OFF";
      button.classList.remove('toggled');
    }
}

let changeRowColumn = () => {
    sliderVal = slider.value;
    gridContainer.replaceChildren();
    rootStyles.setProperty('--grid-rows', sliderVal);
    rootStyles.setProperty('--grid-columns', sliderVal);
    for (let i = 0; i < sliderVal*sliderVal; i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = `grid-item`;
    }
}

colorBox.addEventListener('input', () => rootStyles.setProperty('--pen-color', colorBox.value));



let changeColor = (e) => {

    let penColor = colorBox.value;
    if (pencilButton.value == "ON") {
        if(e.target.className = 'grid-item') {
            e.target.style.backgroundColor = penColor;
            e.target.style.opacity = 1;
        }
        gridContainer.addEventListener('mouseover', changeColor);
    }

    if (shaderButton.value == "ON") {
        if(e.target.className = 'grid-item') {
            e.target.style.backgroundColor = penColor;
            if (e.target.style.opacity < 1) {
                e.target.style.opacity -= -0.2;
            }
        }
        gridContainer.addEventListener('mouseover', changeColor);
    }

    if (rainbowButton.value == "ON") {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        if(e.target.className = 'grid-item') {
            e.target.style.backgroundColor = "#" + randomColor;
            e.target.style.opacity = 1;
        }
        gridContainer.addEventListener('mouseover', changeColor);
    }
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

clearButton.addEventListener('click', changeRowColumn);
slider.onchange = changeRowColumn;
slider.oninput = sliderDisplay;

