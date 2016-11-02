'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const currentGame = require('../game.js');
const check = require('./solutions.js');

const theyWon = function() {
  currentGame.current.game.over = true;
  alert("you won!");
  $('.box').off('click');

};

const changePlayer = function() {
  if (currentGame.turn === 'x') {
    currentGame.turn = 'o';
  } else if (currentGame.turn === 'o') {
    currentGame.turn = 'x';
  }
};

const checkWin = function(index) {
  let solutionSet = check.solutions[index];
  let board = currentGame.current.game.cells;
  // check each solution against the board
  for (let i = 0; i < solutionSet.length; i++) {
        if (board[solutionSet[i][0]] === board[solutionSet[i][1]] &&
          board[solutionSet[i][0]] === currentGame.turn) {
          theyWon();
        }
  }
  return false;
};

const allBox = function(e) {
  e.preventDefault();
  $(this).text(currentGame.turn);
  $(this).addClass(currentGame.turn + '-box');
  playerMove($(this).data("box-index"));
  $(this).off('click');
};

const playerMove = function(index) {
  checkWin(index);
  let data = {
  "game": {
    "cell": {
      "index": index,
      "value": currentGame.turn
      },
    "over": currentGame.current.game.over
    }
  };
  api.updateBoard(data).then(ui.updateBoardSuccess).catch(ui.failure);
  changePlayer();
};



const addBoxHandlers = function() {
  $('.box').addClass('active-box');
  $('.box').on('click', allBox);
};



const startGame = function() {
  api.createGame().then(ui.startGameSuccess).catch(ui.failure);
  addBoxHandlers();
};

module.exports = {
  startGame,
};
