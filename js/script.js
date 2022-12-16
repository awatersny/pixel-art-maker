let grid = [];

const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const pixelCanvas = document.getElementById("pixelCanvas");
const canvasBody = document.getElementById("canvasBody");
const pixelCells = document.getElementsByClassName("pixelCell");

sizePicker.addEventListener("submit", generateGrid);
pixelCanvas.addEventListener("click", colorCell);

function generateGrid(evt) {
  console.log()
  let height = evt.target[0].value;
  let width = evt.target[1].value;
  let pixels = height * width;
  for(let i = 0; i < pixels; i++) {
    grid.push("");
  }
  grid.forEach((cell, id) => {
    //
    console.log(id);
  })
}

function colorCell(evt) {
  if(evt.target.id !== "pixelCanvas") {
    if(evt.target.style.backgroundColor) {
      evt.target.style.backgroundColor = "";
    }
    else {
      evt.target.style.backgroundColor = colorPicker.value;
    }
  }
  console.log(evt.target.className)
}


console.log(canvasBody.childNodes)