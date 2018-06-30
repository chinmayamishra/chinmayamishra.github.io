// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  var table = document.getElementById("pixelCanvas");
  var grid = '';

  // loop over each row
  for (var i = 0; i < height; i++){
    grid += '<tr class="row-' + i + '">';
    // loop for each cell
    for (var j = 0; j < width; j++){
      grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
    }
    grid += '</tr>';
  }

  // add grid into table element
  table.innerHTML = grid;

  // Add click event to grid cells once the table grid has been created
  addClickEventToCells();
}

// gets values for height and width from form and uses them to call makrGrid()
function formSubmission() {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWeight').value;
    makeGrid(height, width);
}

// reset values for height and width from form and uses them to call makrGrid()
function formReset() {
    var height = ('inputHeight').value=1;
    var width = ('inputWeight').value=1;
	document.getElementById("sizePicker").reset();
    makeGrid(height,width);
}


// add click events to all cells
function addClickEventToCells() {
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click",  function(event) {
      var clickedCell = event.target;
      clickedCell.style.backgroundColor = selectedColor;
    });
  }
}

// on color selection return color:
var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value; // sets color to defaul(black);
colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
  }, false);

// on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function() {
  formSubmission();
};

function cellColour(tableId, row, column, col){
    var t = document.getElementById(tableId);
    if(!t) throw '#'+tableId+' does not exist.';
    if(t.rows.length <= row)  throw 'Row '+row+' of #'+tableId+' does not exist.';
    t = t.rows[row];
    if(t.cells.length <= column)  throw 'Column '+column+' of row '+row+' of #'+tableId+' does not exist.';
    t = t.cells[column];
    t.style.backgroundColor = col;
}

// build a default 11x11 grid.
R1=11;
C1=11;
makeGrid(R1,C1);

//var table = document.getElementById("pixelCanvas");   
//var rows = table.getElementsByTagName("tr");  
//console.log(table);
//console.log(rows);

for (var x = 0; x < R1; x++) {
	for (var y = 0; y < C1; y++) {
		if (x%2==0&&y%2==0) {cellColour("pixelCanvas",x,y,selectedColor);}
	}
}