/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.board-squares')
const messageEl = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
// render()

function init() {
  board = [1, null, -1, null, null, 1, null, null, null]
  turn = 1
  winner = null
  render()
}
// turn = (turn === 1) ? -1 : 1
// console.log(turn)

function render() {
  board.forEach((square, index) => {
    if (square === 1) squareEls[index].textContent = 'X'
    else if (square === -1) squareEls[index].textContent = 'O'
  });
  if (winner === null) {
    if (turn === 1) {
      messageEl.textContent = "It is X's turn"
    } else if (turn === -1) {
      messageEl.textContent = "It is O's turn"
    }
  } else if (winner === 'T') {
    messageEl.textContent = "It's a tie!"
  } else {
    messageEl.textContent = `Congratulations ${winner}'s, you win!`
  }
}
