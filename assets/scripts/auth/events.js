'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store.js');

const onSignUp = function(e){
  e.preventDefault();
  let data = getFormFields(this);
  api.signUp(data).then(ui.success).catch(ui.failure);
  $('#sign-up-modal').modal('hide');
};

const onSignIn = function(e){
  e.preventDefault();
  let data = getFormFields(this);
  data = api.signIn(data).then(ui.signInSuccess).catch(ui.failure);
  $('#sign-in-modal').modal('hide');
};

const onXChangePassword = function(e){
  let data = getFormFields(this);
  e.preventDefault();
  if (store.player_x) {
    api.changeXPassword(data)
      .then(ui.success)
      .catch(ui.failure);
    }
  $('#change-x-password-modal').modal('hide');
};

const onOChangePassword = function(e){
  let data = getFormFields(this);
  e.preventDefault();
  if (store.player_o) {
    api.changeOPassword(data)
      .then(ui.success)
      .catch(ui.failure);
    }
  $('#change-o-password-modal').modal('hide');
};

const onSignOutX = function(e){
  e.preventDefault();
  if (store.player_x) {
    api.signOutX()
      .then(ui.success)
      .catch(ui.failure);
    }
  $('#player-x-bar').text('Player X: ');
  store.player_x = null;
  $("#start-game-button").hide();
  $('.change-pw-x-btn').hide();
  $('#sign-out-x-button').hide();
};

const onSignOutO = function(e){
  e.preventDefault();
  if (store.player_o) {
    api.signOutO()
      .then(ui.success)
      .catch(ui.failure);
    }
  $('#player-o-bar').text('Player O: ');
  store.player_o = null;
  $("#start-game-button").hide();
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-x-password-form').on('submit', onXChangePassword);
  $('.change-o-password-form').on('submit', onOChangePassword);
  $('#sign-out-x-button').on('click', onSignOutX);
  $('#sign-out-o-button').on('click', onSignOutO);
};

module.exports = {
  onSignUp,
  onSignIn,
  onXChangePassword,
  onOChangePassword,
  onSignOutX,
  addHandlers,
};
