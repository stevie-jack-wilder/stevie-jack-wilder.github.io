//I created this board with the great guide from Medium.com to assit my JS learning journey
//https://medium.com/javascript-in-plain-english/the-game-of-life-using-javascript-fc1aaec8274f


//Create elements of button features
let started=false //Set to true when user clicks 'start'
let timer  // Controls Evolutions
let evolutionSpeed=750 //One second between generations


//create function attached to html button features to start/stop Evoution.
function startStopGol() {
    let startstop=document.querySelector('#btnstartstop')

    if (!started) {
        started = true
        startstop.value="Stop Evolution"
        evolve()
    } else {
        started = false
        startstop.value="Start Evolution"
        clearTimeout(timer)
    }
}

function resetWorld() {
    location.reload()
}
//create rows and columns
const rows = 40
const cols = 40

//create 1D arrays
let currGen = [rows];
let nextGen = [rows];

//create 2D array
function createGenArrays () {
    for (let i = 0; i < rows; i++) {
        currGen[i] = new Array(cols)
        nextGen[i] = new Array(cols)
    }
}

//Initially, all cell values are 0 or dead. 1 will be alive. 
function initGenArrays() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            currGen[i][j] = 0;
            nextGen[i][j] = 0;
        }
    }
}

 //create a board using a 2D array of rows and cols.
function createWorld() {

    //Return first el and match the specified selector(s). No match = null
    let world = document.querySelector('#world')

    //(tagNameIsString[, options]) create el by tagName, which is a string.
    let tbl = document.createElement('table')
    
    //(name, value) set val of an attr. If it exists, value updated. New - added.
    tbl.setAttribute('id', 'worldgrid')
    
for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td')

            //Keep track of each cell, using 'i_j'. The upper left corner is 0_0
            cell.setAttribute('id', i + '_' + j)

            //Add a class of 'dead' to each cell. It can be changed to 'alive'. 
            cell.setAttribute('class', 'dead')
            
            //Initiate the game via an eventListener
            cell.addEventListener('click', cellClick)

            //Append a node as the last child of a node
            tr.appendChild(cell)
        }
        tbl.appendChild(tr)
    }   
    world.appendChild(tbl)
}

function cellClick() {
    let loc = this.id.split("_")
    let row = Number(loc[0]) //Retrieve i
    let col = Number(loc[1]) //Retrieve j

    //Toggles cell alive or dead
    if (this.className ==='alive') {
        this.setAttribute('class', 'dead')
        currGen[row][col] = 0 //Value of 0 is dead
    } else {
        this.setAttribute('class', 'alive')
        currGen[row][col] = 1 //Value of 1 is alive
    }
}

//Ensure we are never looking out of bounds, aka, a negative number as a cell position.
//Current row and column will never be less than 0.
function getNeighbourCount(row, col) {
    let count = 0
    let nrow = Number(row)
    let ncol = Number(col)

    //Ensure we are not on the first row
    if (nrow - 1 >= 0) {
    // Check top neighbour
        if (currGen[nrow - 1][ncol] == 1)
        count++    
    }

    //Ensure not in the first cell
    if (nrow - 1 >= 0 && ncol - 1 >= 0) {
    // Check upper left neighbour
        if (currGen[nrow - 1][ncol - 1] == 1)
        count++
    }

    //Ensure not on first col
    if (ncol - 1 >= 0) {
    //Check left neighbour
        if (currGen[nrow][ncol - 1] == 1)
        count++
    }

    //Ensure not on last col
    if (ncol + 1 < cols) {
    //Check right neighbour
        if (currGen[nrow][ncol + 1] == 1)
        count++
    }

    //Ensure not on bottom left corner
    if (nrow + 1 < rows && ncol - 1 >= 0) {
    //Check bottom left neighbour
        if (currGen[nrow + 1][ncol - 1] == 1)
        count++
    }

    //Ensure not on bottom right
    if (nrow + 1 < rows && ncol + 1 < cols) {
    //Check bottom right neighbour
        if (currGen[nrow + 1][ncol + 1] == 1)
        count++
    }

    //Ensure not on last row
    if (nrow + 1 < rows) {
    //Check bottom neighbour
        if (currGen[nrow + 1[ncol] == 1])
    count++
    }
    return count
}

//Loop through each cell and get neighbour count.
//Determine if cell stays alive, comes alive, stays dead, or dies. 

function createNextGen() {
    for (row in currGen) {
        for (col in currGen[row]) {
            let neighbours = getNeighbourCount(row, col)

            //Check the rules!!!!
            //If cell is ALIVE, aka 1 and...: 
            if (currGen[row][col] == 1) {
                if (neighbours < 2) {
                    nextGen[row][col] = 0 //... cell has less than 2 neighbours, it dies.
                } else if (neighbours == 2 || neighbours == 3) {
                    nextGen[row][col] = 1 //... cell has 2 or 3 neighbours, it lives.
                } else if (neighbours > 3) {
                    nextGen[row][col] = 0 //... cell has more than 3 neighbours, it dies.
                }
            //If cell is DEAD, aka 0, birth a new cell
            } else if (currGen[row][col] == 0) {
                if (neighbours == 3) {
                    nextGen[row][col] = 1 
                }

            }
        }
    }
}

//Update the currGen with result of createNextGen
//Set nextGen to 0
function updateCurrGen() {

    for (row in currGen) {
        for (col in currGen[row]) {
            currGen[row][col] = nextGen[row][col]
            nextGen[row][col] = 0
        }
    }
}

//Update the visual display of the world.
function updateWorld() {
    let cell=''
    for (row in currGen) {
        for (col in currGen[row]) {
            cell = document.getElementById(row + '_' + col)
            if (currGen[row][col] === 0) {
                cell.setAttribute('class', 'dead')
            } else {
                cell.setAttribute('class', 'alive')
            }
        }
    }
}

window.onload=()=>{
    createWorld() //The visual table of a 2D array
    createGenArrays() //current and next gen
    initGenArrays() //Set all array cells to 0 or dead
}

function evolve() {
    createNextGen()
    updateCurrGen()
    updateWorld()
    //added code to react to startstop button features
    if (started) {
        timer = setTimeout(evolve, evolutionSpeed)
    }
}

//draw this out

