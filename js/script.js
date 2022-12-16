let grid = [];

const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const pixelCanvas = document.getElementById("pixelCanvas");
const canvasBody = document.getElementById("canvasBody");
const pixelCells = document.getElementsByClassName("pixelCell");

sizePicker.addEventListener("submit", generateGrid);
pixelCanvas.addEventListener("click", colorCell);

function generateGrid(evt) {
  let height = evt.target[0].value;
  let width = evt.target[1].value;
  let id = 0;
  canvasBody.innerHTML = "";
  for (let row = 0; row < height; row++) {
    const canvasRow = document.createElement("tr");
    canvasRow.className = "canvasRow";
    for (let cell = 0; cell < width; cell++) {
      const pixelCell = document.createElement("td");
      pixelCell.className = "pixelCell";
      pixelCell.id = id;
      canvasRow.appendChild(pixelCell);
      id++;
    }
    canvasBody.appendChild(canvasRow);
  }
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