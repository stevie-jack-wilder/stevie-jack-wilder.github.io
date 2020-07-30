document.addEventListener('DOMContentLoaded', startGame)

// Board:
//    - Is an object literal. 
//    - Contains 1 array of 'cells'.
//    - Array holds 9 sub-objects, with 4 properties & values.
//        - row & col = physical position on board. 
//        - isMine & hidden - location of mines, status of cell. 
var board = {
  cells: [
    {row: 0, col: 0, 
      isMine: true,
      hidden: true,
    },

    {row: 0, col: 1, 
      isMine: false,
      hidden: true,
    }, 

    {row: 0, col: 2, 
      isMine: false,
      hidden: true,
    }, 

    {row: 1, col: 0, 
      isMine: false,
      hidden: true,
    },

    {row: 1, col: 1, 
      isMine: false,
      hidden: true,
    }, 

    {row: 1, col: 2, 
      isMine: true,
      hidden: true,
    },

    {row: 2, col: 0, 
      isMine: false,
      hidden: true,
    },

    {row: 2, col: 1, 
      isMine: false,
      hidden: true,
    }, 

    {row: 2, col: 2, 
      isMine: true,
      hidden: true,
    }, 
  ]
}

// startGame:
//    - Iterates loop by 1 through new surroundingMines var.
//    - Assigns result to countSurroundingMines function.
//    - Left and right click initiate checkForWin function.

function startGame () {
  for (let i = 0; i < board.cells.length; i++) {
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]) 
  }
  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)
  lib.initBoard()
}

function checkForWin () {
  for (i = 0; i < board.cells.length; i++) {
    if ((board.cells[i].isMine == true && board.cells[i].isMarked == false) || (board.cells[i].isMine == false && board.cells[i].hidden == true))
    {
    return false  
    }  
  }
  lib.displayMessage("Ka pai!")

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++
  }
}
  return count;
}

