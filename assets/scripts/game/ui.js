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
    success(data);
  } else {
    failure(data);
  }

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
