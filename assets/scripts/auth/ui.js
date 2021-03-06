'use strict';

const store = require('../store.js');
const gameEvents = require('../game/events.js');
const currentGame = require('../game.js');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
  if (!store.player_x) {
    store.player_x = {
      user: data.user
    };

    $('#player-x-bar').text('Player X: ' + store.player_x.user.email);
    $('.change-pw-x-btn').removeClass('hidden');
    $('#sign-out-x-button').removeClass('hidden');
    $('#show-x-stats').removeClass('hidden');
    $("#start-game-button").removeClass('hidden');

    $("#start-game-button").show();
    $('.change-pw-x-btn').show();
    $('#show-x-stats').show();
    $('#sign-out-x-button').show();
  } else if (!store.player_o) {
    store.player_o = {
      user: data.user
    };
    $('#player-o-bar').text('Player O: ' + store.player_o.user.email);
    $('.change-pw-o-btn').removeClass('hidden');
    $('divider').removeClass('hidden');
    $('#sign-out-o-button').removeClass('hidden');
    $('#show-o-stats').removeClass('hidden');

    $("#start-game-button").show();
    $('.change-pw-o-btn').show();
    $('#show-o-stats').show();
    $('#sign-out-o-button').show();
    if (currentGame.current.game.over !== true) {
      gameEvents.joinGame();
    }
  }
  if (store.player_x && store.player_o) {
    $('.sign-in-btn').hide();
  }
};

const showXStatsSuccess = function(data) {
  store.player_x.stats = data;
  let games = store.player_x.stats.games;
  let numGames = games.length;
  $('.status-row').text("X's total games: " + numGames);
};

const showOStatsSuccess = function(data) {
  store.player_o.stats = data;
  let games = store.player_o.stats.games;
  let numGames = games.length;
  $('.status-row').text("O's total games: " + numGames);
};

const signOutXSuccess = (data) => {
  store.player_x = null;
  $('.sign-in-btn').show();
};

const signOutOSuccess = (data) => {
  store.player_o = null;
  $('.sign-in-btn').show();
};

const failure = (error) => {
  $('.status-row').text('Whoops! Something went wrong! Please try again...');
};



module.exports = {
  failure,
  success,
  signInSuccess,
  showXStatsSuccess,
  showOStatsSuccess,
  signOutXSuccess,
  signOutOSuccess
};
