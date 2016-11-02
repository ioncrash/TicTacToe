'use strict';

const game = require('../game.js');
const gameEvents = require('./events.js');

const success = (data) => {
  console.log(data);
};

const startGameSuccess = (data) => {
  if (!game.current) {
    game.current = {
      data,
    };
  }
    debugger;
    success(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  success,
  startGameSuccess,
  failure,
};
