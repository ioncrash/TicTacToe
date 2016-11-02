'use strict';

const game = require('../game.js');
const gameEvents = require('./events.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

const startGameSuccess = (data) => {
    game.current = data;
    game.turn = 'x';
    success(data);
    debugger;
};

module.exports = {
  success,
  startGameSuccess,
  failure,
};
