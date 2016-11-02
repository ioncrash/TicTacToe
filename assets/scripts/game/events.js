'use strict';

const api = require('./api.js')

const startGame = function() {
  api.createGame();
  debugger;
};

module.exports = {
  startGame,
};
