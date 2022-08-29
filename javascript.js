const gridContainer = document.querySelector('.grid-container');
let root = document.querySelector(':root');
let gridRows = getComputedStyle(root).getPropertyValue('--grid-rows');
console.log(gridRows);