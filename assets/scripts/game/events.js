'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const currentGame = require('../game.js');

// const allBox = function(e) {
//   e.preventDefault();
//   $('[data-box-index=game.turn');
//   debugger;
// };

const playerMove = function(index) {

  currentGame.current.game.cells[index] = currentGame.turn;
  debugger;
  let data = {
  "game": {
    "cell": {
      "index": index,
      "value": currentGame.turn
    },
    "over": false
  }
};
  api.updateBoard(data);
};

const boxZero = function(e) {
  e.preventDefault();
  if (currentGame.turn === 'x') {
    $('#box-0').text('x');
    $('#box-0').addClass('x-box');
    playerMove(0);
    // changePlayer();
  }
};

const boxOne = function(e) {
  e.preventDefault();

};

const boxTwo = function(e) {
  e.preventDefault();

};

const boxThree = function(e) {
  e.preventDefault();

};

const boxFour = function(e) {
  e.preventDefault();

};

const boxFive = function(e) {
  e.preventDefault();

};

const boxSix = function(e) {
  e.preventDefault();

};

const boxSeven = function(e) {
  e.preventDefault();

};

const boxEight = function(e) {
  e.preventDefault();

};

const addBoxHandlers = function() {
  $('.box').addClass('active-box');
  // $('.box').on('click', allBox);
  $('#box-0').on('click', boxZero);
  $('#box-1').on('click', boxOne);
  $('#box-2').on('click', boxTwo);
  $('#box-3').on('click', boxThree);
  $('#box-4').on('click', boxFour);
  $('#box-5').on('click', boxFive);
  $('#box-6').on('click', boxSix);
  $('#box-7').on('click', boxSeven);
  $('#box-8').on('click', boxEight);
  // $('*[data-box-index=]');
};

const startGame = function() {
  api.createGame().then(ui.startGameSuccess).catch(ui.failure);
  addBoxHandlers();
};

module.exports = {
  startGame,
};
