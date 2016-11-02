'use strict';

const currentGame = require('../game.js');
const gameEvents = require('./events.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

const checkCats = function() {
  let board = currentGame.current.game.cells;
  return !(board.some((e) => e === ""));
};

const startGameSuccess = (data) => {
    currentGame.current = data;
    currentGame.turn = 'x';
    $('#start-game-button').hide();
    success(data);
};

const updateBoardSuccess = (data) => {
  currentGame.current = data;
  success(data);
};

module.exports = {
  success,
  startGameSuccess,
  updateBoardSuccess,
  failure,
};
