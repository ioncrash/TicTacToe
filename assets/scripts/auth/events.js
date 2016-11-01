'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const getFormFields = require('../../../lib/get-form-fields');

const onSignUp = function(e){
  e.preventDefault();

  let data = getFormFields(this);
  api.signUp(data).then(ui.success).catch(ui.failure);
  $('#sign-up-modal').modal('hide');
};

const onSignIn = function(e){
  e.preventDefault();
  let data = getFormFields(this);
  debugger;
  data = api.signIn(data).then(ui.signInSuccess).catch(ui.failure);
  $('#sign-in-modal').modal('hide');
};

const onChangePassword = function(e){
  let data = getFormFields(this);
  e.preventDefault();
  debugger;
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
    debugger;
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
