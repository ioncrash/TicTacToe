'use strict';

const store = require('../store.js');
const app = require('../app.js');

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

module.exports = {
  createGame,
};
