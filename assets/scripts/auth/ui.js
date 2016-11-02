'use strict';

const store = require('../store.js');
const game = require('../game/events.js');

const success = (data) => {
  console.log(data);
};

const checkReady = function() {
  if (store.player_x && store.player_o) {
    $("#navbar-right-side").prepend('<li><button type="button" class="btn btn-primary btn-lg" id="start-game-button">Start game</button></li>');
    $("#start-game-button").on('click', function(event) {
      event.preventDefault();
      game.startGame();
    });
  }
};

const signInSuccess = (data) => {
  if (!store.player_x) {
    store.player_x = {
      user: data.user
    };
    $('#player-x-bar').text('Player X: ' + store.player_x.user.email);
    checkReady();
  } else if (!store.player_o) {
    store.player_o = {
      user: data.user
    };
    $('#player-o-bar').text('Player O: ' + store.player_o.user.email);
    checkReady();
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
