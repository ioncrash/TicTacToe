'use strict';

const store = require('../store.js');
const gameEvents = require('../game/events.js');

const success = (data) => {
  console.log(data);
};

const displayStartButton = function() {
    $("#navbar-right-side").prepend('<li><button type="button" class="btn btn-primary btn-lg" id="start-game-button">Start game</button></li>');
    $("#start-game-button").on('click', function(event) {
      event.preventDefault();
      gameEvents.startGame();
    });
};

const signInSuccess = (data) => {
  if (!store.player_x) {
    store.player_x = {
      user: data.user
    };
    $('#player-x-bar').text('Player X: ' + store.player_x.user.email);

    //update navbar
    $('.change-pw-x-btn').removeClass('hidden');
    $('divider').removeClass('hidden');
    $('#sign-out-x-button').removeClass('hidden');
    $('#show-x-stats').removeClass('hidden');
    $('.change-pw-x-btn').show();
    $('#show-x-stats').show();
    $('#sign-out-x-button').show();
    displayStartButton();
  } else if (!store.player_o) {
    store.player_o = {
      user: data.user
    };

    //update navbar
    $('#player-o-bar').text('Player O: ' + store.player_o.user.email);
    $('.change-pw-o-btn').removeClass('hidden');
    $('divider').removeClass('hidden');
    $('#sign-out-o-button').removeClass('hidden');
    $('#show-o-stats').removeClass('hidden');

    $("#start-game-button").show();
    $('.change-pw-o-btn').show();
    $('#show-o-stats').show();
    $('#sign-out-o-button').show();

    if (store.player_x) {
      gameEvents.joinGame();
    }
  }
    success(data);
};

const showStatsSuccess = function(data) {
  store.player_x.stats = data;
  debugger;
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
  showStatsSuccess,
};
