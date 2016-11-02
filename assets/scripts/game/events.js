'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const boxZero = function(e) {
  e.preventDefault();
  debugger;
};

const addBoxHandlers = function() {
  $('#box-0').on('click', boxZero);
  $('#box-0').addClass('active-box');
};

const startGame = function() {
  api.createGame().then(ui.startGameSuccess).catch(ui.failure);
  addBoxHandlers();
  debugger;
};

module.exports = {
  startGame,
};
