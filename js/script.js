let grid = [];

const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const pixelCanvas = document.getElementById("pixelCanvas");
const canvasBody = document.getElementById("canvasBody");
const pixelCells = document.getElementsByClassName("pixelCell");

sizePicker.addEventListener("submit", generateGrid);
// pixelCanvas.addEventListener("click", colorCell);

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
      pixelCell.addEventListener("click", colorCell);
      canvasRow.appendChild(pixelCell);
      id++;
    }
    canvasBody.appendChild(canvasRow);
  }
  colorPicker.value = "#000000";
  console.log(colorPicker);
}

function colorCell(evt) {
  evt.target.style.backgroundColor = colorPicker.value;
}