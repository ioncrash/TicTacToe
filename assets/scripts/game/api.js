'use strict';

const store = require('../store.js');
const app = require('../app.js');
const currentGame = require('../game.js');

const createGame = function() {
  return $.ajax({
    url: app.host + 'games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.player_x.user.token,
    }
  });
};

const updateBoard = function(data) {
  return $.ajax({
    url: app.host + 'games/' + currentGame.current.id,
    method: 'PATCH',
    data,
  });
};

module.exports = {
  createGame,
  updateBoard,
};
