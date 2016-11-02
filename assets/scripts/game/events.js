'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const boxZero = function(e) {
  e.preventDefault();

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
  $('#box-0').on('click', boxZero);
  $('#box-1').on('click', boxOne);
  $('#box-2').on('click', boxTwo);
  $('#box-3').on('click', boxThree);
  $('#box-4').on('click', boxFour);
  $('#box-5').on('click', boxFive);
  $('#box-6').on('click', boxSix);
  $('#box-7').on('click', boxSeven);
  $('#box-8').on('click', boxEight);
};

const startGame = function() {
  api.createGame().then(ui.startGameSuccess).catch(ui.failure);
  addBoxHandlers();
  debugger;
};

module.exports = {
  startGame,
};
