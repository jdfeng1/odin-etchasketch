const gridContainer = document.querySelector('.grid-container');
let root = document.querySelector(':root');
let rootStyles = root.style;
let gridRows = getComputedStyle(root).getPropertyValue('--grid-rows');
let gridCols = getComputedStyle(root).getPropertyValue('--grid-columns');
console.log(gridRows);

let changeRowColumn = (row, col) => {
    rootStyles.setProperty('--grid-rows', row);
    rootStyles.setProperty('--grid-columns', col);
    for (let i = 0; i < row * col; i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = `grid-item grid${i}`;
        console.log(cell.className);
    }
}
changeRowColumn(64, 64);
gridRows = getComputedStyle(root).getPropertyValue('--grid-rows')
console.log(gridRows);