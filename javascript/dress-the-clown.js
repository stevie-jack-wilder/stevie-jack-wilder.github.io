  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //



document.onkeydown = checkKey; //key pushed calls function

function checkKey(e) {

  console.log(e)

  if (e.keyCode == '38') { //up arrow
  changeVertical(-1) 
  }
  else if (e.keyCode == '40') { //down arrow
  changeVertical(1)
  }
  else if (e.keyCode == '37') { //left arrow
  changeHorizontal(-1)
  }
  else if (e.keyCode == '39') { //right arrow
  changeHorizontal(1)
  }
}

var indexes = [0, 0, 0]
var mainIndex = 0

var head = document.getElementById("head")
var body = document.getElementById("body")
var shoes = document.getElementById("shoes")

var imgs = [head, body, shoes]
var strings = ["head", "body", "shoes"]

function changeHorizontal(move) {
  var index = indexes[mainIndex]
  var image = imgs[mainIndex]
  var str = strings[mainIndex]

    index += move

    if (index < 0)
      index = 5

    if (index > 5)
      index = 0
    
    indexes[mainIndex] = index

    image.src = "../images/dress-up/" + str + index + ".png"
}

function changeVertical(move) {
  mainIndex == move

  if (mainIndex <  0)
      mainIndex = 2

  if (mainIndex > 2)
      index = 0   
}