/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.board-squares')
const messageEl = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
render()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  // render()
}

function render() {
  board.forEach((square, index) => {
    square = squareEls[index]
    styleSquare(square)
  });
  turn = (turn === 1) ? -1 : 1
}

function styleSquare(square) {
  console.log(`styling for ${square} goes here`)
}