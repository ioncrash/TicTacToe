'use strict';

const currentGame = require('../game.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

const startGameSuccess = (data) => {
    currentGame.current = data;
    currentGame.turn = 'x';
    $('#start-game-button').hide();
    $('#forfeit-button').show();
    $('#forfeit-button').removeClass('hidden');
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
