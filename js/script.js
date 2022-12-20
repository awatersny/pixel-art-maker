const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const canvasBody = document.getElementById("canvasBody");

sizePicker.addEventListener("submit", generateGrid);

function removeChildren(element) {
  while(element.children.length){
    element.removeChild(element.children[0]);
  }
}

function generateGrid(evt) {
  let height = evt.target[0].value;
  let width = evt.target[1].value;
  let id = 0;
  removeChildren(canvasBody);
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
}

function colorCell(evt) {
  evt.target.style.backgroundColor = colorPicker.value;
}