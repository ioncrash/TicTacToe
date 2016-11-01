'use strict';

const api = require('./api');
const ui = require('./ui');

const onSignUp = function(e){
  e.preventDefault();

  let data = {
    "credentials": {
      "email": $('#sign-up-email').val(),
      "password": $('#sign-up-password').val()
    }
  };
  let confirmPassword = $('#confirm-password').val();
  let user = api.signUp(data);
  $('#sign-up-modal').modal('hide');
};

const onSignIn = function(e){
  e.preventDefault();
  let data = {
    "credentials": {
      "email": $('#sign-in-email').val(),
      "password": $('#sign-in-password').val()
    }
  };
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
  $('#sign-in-modal').modal('hide');
};

const onChangePassword = function(e){
  e.preventDefault();
  let data = {
    "credentials": {
      "old-password": $('#old-password').val(),
      "password": $('#new-password').val(),
    }
  };
  api.changePassword(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
  $('#change-password-modal').modal('hide');
};

const onSignOut = function(e){
  alert('you have signed out!');
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('#sign-out-button').on('click', onSignOut);
};

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  addHandlers,
};
