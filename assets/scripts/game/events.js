'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const currentGame = require('../game.js');
const check = require('./solutions.js');
const store = require('../store.js');


const theyWon = function() {
  currentGame.current.game.over = true;
  $('.box').off('click');
  $('#start-game-button').show();
  $("#forfeit-button").hide();
  $('.status-row').text("Player " + currentGame.turn.toUpperCase() + " wins!");
  };

const catsGame = function() {
  currentGame.current.game.over = true;
  $('.box').off('click');
$('#start-game-button').show();
$("#forfeit-button").hide();
$('.status-row').text("Cat's game!");
};

const changePlayer = function() {
  if (currentGame.turn === 'x') {
    currentGame.turn = 'o';
  } else if (currentGame.turn === 'o') {
    currentGame.turn = 'x';
  }
  $('.status-row').text("Player " + currentGame.turn.toUpperCase() + " go!");
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

const playerMove = function(index) {
  checkWin(index);
  currentGame.turnCount++;
  if (currentGame.turnCount === 9 && currentGame.current.game.over === false) {
    catsGame();
  }
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
  if (currentGame.current.game.over) {
    currentGame.current = null;
  } else {
    changePlayer();
  }
};



const allBox = function(e) {
  e.preventDefault();
  $(this).text(currentGame.turn.toUpperCase());
  $(this).addClass(currentGame.turn + '-box');
  playerMove($(this).data("box-index"));
  $(this).removeClass('active-box');
  $(this).off('click');
};





const addBoxHandlers = function() {
  $('.box').addClass('active-box');
  $('.box').on('click', allBox);
};



const startGame = function() {
  event.preventDefault();
  api.createGame().then(ui.startGameSuccess).catch(ui.failure);
  $('.box').addClass('active-box');
  $('.active-box').addClass('active-box-x');
  $('.box').removeClass('x-box');
  $('.box').removeClass('x-box');
  $('.box').removeClass('o-box');
  currentGame.turnCount = 0;
  if (store.player_o) {
    addBoxHandlers();
    $('.status-row').text("Player X, go!");
  }
};

const forfeitGame = () => {
  changePlayer();
  theyWon();
};

const joinGame = function () {
  api.joinGame().then(ui.startGameSuccess).catch(ui.failure);
  addBoxHandlers();
  $('.status-row').text("Player X, go!");
};

const signOutX = () => {
  if (currentGame.turn === 'o') {
    theyWon();
  } else if (currentGame.turn === 'x') {
    forfeitGame();
  }
};

const signOutO = () => {
  if (currentGame.turn === 'x') {
    theyWon();
  } else if (currentGame.turn === 'o') {
    forfeitGame();
  }
};


const addHandlers = () => {
  $("#start-game-button").on('click', startGame);
  $("#forfeit-button").on('click', forfeitGame);
};

module.exports = {
  startGame,
  joinGame,
  addHandlers,
  signOutO,
  signOutX,
};
