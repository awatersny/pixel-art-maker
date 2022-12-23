// Initial cached element references
const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const canvasBody = document.getElementById("canvasBody");

// Event listener for the canvas size picker form
sizePicker.addEventListener("submit", generateGrid);

// Remove all child elements from passed in element
function removeChildren(element) {
  while(element.children.length){
    element.removeChild(element.children[0]);
  }
}

// Create a new canvas on form submission.
function generateGrid(evt) {
  // Below values "evt.target[id].value" are from a console.log() 
  // of the form element i did earlier.
  // Assign height and width to more readable values.
  const height = evt.target[0].value;
  const width = evt.target[1].value;
  // Unique id for each cell incremented within inner loop
  let id = 0;
  // Reset canvas before creating a new one.
  removeChildren(canvasBody);
  for (let row = 0; row < height; row++) {
    // Create as many rows on the canvas that the height dictates.
    const canvasRow = document.createElement("tr");
    canvasRow.className = "canvasRow";
    for (let cell = 0; cell < width; cell++) {
      // Create as many cells per row on the canvas that the width dictates.
      const pixelCell = document.createElement("td");
      // Assign classname and unique id to each cell.
      pixelCell.className = "pixelCell";
      pixelCell.id = id;
      // Add event listener to each pixel cell.
      pixelCell.addEventListener("click", colorCell);
      // Append each cell to canvas row.
      canvasRow.appendChild(pixelCell);
      id++;
    }
    // Append each row to canvas.
    canvasBody.appendChild(canvasRow);
  }
  // Reset color picker since refresh was disabled.
  colorPicker.value = "#000000";
}

// Change individual cell color on click.
function colorCell(evt) {
  evt.target.style.backgroundColor = colorPicker.value;
}
