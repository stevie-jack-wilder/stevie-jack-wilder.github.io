// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//Start function: 
//    - links var table to html div "table".
//    - for loop 1 - iterates through rows.
//    - for loop 2 - iterates through cells within rows.
//    - pushes outcome of both loops to cellsArray.
//    - pushes result of cellsArray to rowsArray.
//    - outcome: Five arrays of rows containing five arrays of cells.

var rowsArray = []

//Create mole: 
//    - creates img element in HTML.
//    - Attaches img location, ID tag, and CSS styling.

var img = document.createElement("img");
    img.src = "./images/cattbutt.png";
    img.id = "butt";
    img.onclick = whackedButt 

var audio = new Audio ();
audio.src = "./audio/meow.mp3";


function start() {
  var table = document.getElementById("table");
  for (var i = 0; i < table.rows.length; i++) {
    var cellsArray = []
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        cellsArray.push(table.rows[i].cells[j])
      }
      rowsArray.push(cellsArray);
    }
    console.log(rowsArray)
  }
start()

//randomSelector function:
//    - finds random row between 0-4.
//    - finds random cell between 0-4.
//    - assigns random row and cell to randomCell function.
//    - output: rowsArray var returns random cell on refresh.
//    - appends img to cell chosen by randomCell var.

function randomSelector() {
  var randomRowIndex = Math.floor(Math.random() * 5);
  var randomCellIndex = Math.floor(Math.random() * 5);
  var randomCell = rowsArray[randomRowIndex][randomCellIndex];
    randomCell.appendChild(img);
  console.log(randomCell)
}

randomSelector ()

function whackedButt () {
  audio.play() ;
  randomSelector ()
}


///// Stretch: 
//Add counter for how many times butt whacked
//Add timer and score pop-up as alert
//Add high score field  (will reset after refresh)
//Rewrite random index function so can't give you the same index twice in a row.