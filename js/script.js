/*----------------------------------------Constants------------------------------------------*/

/*----------------------------------------Variables------------------------------------------*/
let grid = [];

/*--------------------------------Cached Element References----------------------------------*/
const sizePicker = document.getElementById("sizePicker");
const pixelCells = document.getElementsByClassName("pixelCell");

/*------------------------------------Event Listeners----------------------------------------*/
sizePicker.addEventListener("submit", generateGrid);

/*---------------------------------------Functions-------------------------------------------*/
function generateGrid(evt) {
  console.log()
  let height = evt.target[0].value;
  let width = evt.target[1].value;
  let row = [];
  for(let col = 0; col < width; col++) {
    row.push("#fff");
  }
  for(let i = 0; i < height; i++) {
    grid.push(row);
    console.log(grid[i]);
  }
}