'use strict';

const store = require('../store.js');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
  if (!store.player_x) {
    store.player_x = {
      user: data.user
    };
    $('#player-x-bar').text('Player X: ' + store.player_x.user.email);
  } else if (!store.player_o) {
    store.player_o = {
      user: data.user
    };
    $('#player-o-bar').text('Player O: ' + store.player_o.user.email);
  }
    success(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};



module.exports = {
  failure,
  success,
  signInSuccess,
};
