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
  if (!game.current) {
    game.current = {
      data,
    };
    success(data);
  } else {
    failure(data);
  }

};

module.exports = {
  success,
  startGameSuccess,
  failure,
};
