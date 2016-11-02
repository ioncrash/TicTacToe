'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const currentGame = require('../game.js');

const allBox = function(e) {
  e.preventDefault();
  $(this).text(currentGame.turn);
  $(this).addClass(currentGame.turn + '-box');
  playerMove($(this).data("box-index"));
  $(this).off('click');
};

const playerMove = function(index) {
  let data = {
  "game": {
    "cell": {
      "index": index,
      "value": currentGame.turn
      },
    "over": false
    }
  };
  api.updateBoard(data).then(ui.updateBoardSuccess).catch(ui.failure);
  //changePlayer();
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
