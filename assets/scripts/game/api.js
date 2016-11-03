'use strict';

const store = require('../store.js');
const app = require('../app.js');
const currentGame = require('../game.js');

const getGames = function() {
  return $.ajax({
    url: app.host + 'games/7906',
    method: 'GET'
  });
};

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

const joinGame = function() {
  return $.ajax({
    url: app.host + 'games/' + currentGame.current.game.id,
    method: 'PATCH',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.player_o.user.token,
    }
  });
};

const updateBoard = function(data) {
  return $.ajax({
    url: app.host + 'games/' + currentGame.current.game.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.player_x.user.token,
    }
  });
};

module.exports = {
  createGame,
  updateBoard,
  joinGame,
  getGames,
};
