/*----------------------------------------Constants------------------------------------------*/

/*----------------------------------------Variables------------------------------------------*/
let grid = [];
let height = 1;
let width = 1;

/*--------------------------------Cached Element References----------------------------------*/
const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const pixelCanvas = document.getElementById("pixelCanvas");
const pixelCells = document.getElementsByClassName("pixelCell");

/*------------------------------------Event Listeners----------------------------------------*/
sizePicker.addEventListener("submit", generateGrid);
pixelCanvas.addEventListener("click", colorCell);

/*---------------------------------------Functions-------------------------------------------*/
function generateGrid(evt) {
  console.log()
  height = evt.target[0].value;
  width = evt.target[1].value;
  let pixels = height * width;
  for(let i = 0; i < pixels; i++) {
    grid.push("#fff");
  }
  console.log(grid);
}

function colorCell(evt) {
  console.log();
  console.log(evt.target.id);
}
