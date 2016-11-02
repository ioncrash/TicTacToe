'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const startGame = function() {
  api.createGame().then(ui.startGameSuccess).catch(ui.failure);
  debugger;
};

module.exports = {
  startGame,
};
