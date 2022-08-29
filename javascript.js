const gridContainer = document.querySelector('.grid-container');
let root = document.querySelector(':root');
let rootStyles = root.style;
let gridRows = getComputedStyle(root).getPropertyValue('--grid-rows');
let gridCols = getComputedStyle(root).getPropertyValue('--grid-columns');
console.log(gridRows);

let changeRowColumn = (row, col) => {
    rootStyles.setProperty('--grid-rows', row);
    rootStyles.setProperty('--grid-columns', col);

}
changeRowColumn(16, 16);
gridRows = getComputedStyle(root).getPropertyValue('--grid-rows')
console.log(gridRows);