/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.board-squares')
const messageEl = document.getElementById('message')
const resetBtnEl = document.getElementById('resetButton')

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(square => {
  square.addEventListener('click', event => {
    handleClick(event)
  })
})

resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render() {
  board.forEach((square, index) => {
    if (square === 1) squareEls[index].textContent = 'X'
    else if (square === -1) squareEls[index].textContent = 'O'
    else squareEls[index].textContent = ''
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
    messageEl.textContent = `Congratulations! Player ${winner} wins!`
  }
}

function handleClick(evt) {
  if (winner === null) {
    const sqIdx = getSquareId(evt)
    function getSquareId(square) {
      return parseInt(square.target.id.substring(2))
    }
    if (turn === 1 && board[sqIdx] === null) board[sqIdx] = turn, turn *= -1
    else if (turn === -1 && board[sqIdx] === null) board[sqIdx] = turn, turn *= -1
    getWinner()
    render()
  }
}

function getWinner() {
  winningCombos.forEach(winningCombo => {
    const firstSquare = winningCombo[0]
    const secondSquare = winningCombo[1]
    const thirdSquare = winningCombo[2]
    let sum = board[firstSquare] + board[secondSquare] + board[thirdSquare]
    if (sum === 3) winner = 'X'
    else if (sum === -3) winner = 'O'
    else if (board.every(isTaken) && board.some(isNull) === false) winner = 'T'
  })
  function isTaken(element) {
    if (element === 1 || element === -1) return true
  }

  function isNull(element) {
    if (element === null) return true
  }
}

