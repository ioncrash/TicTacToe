'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function(e){
  e.preventDefault();
  let email = $('#sign-up-email').val();
  let password = $('#sign-up-password').val();
  let confirmPassword = $('#confirm-password').val();
  $('#sign-up-modal').modal('hide');
};

const onSignIn = function(e){
  e.preventDefault();
  let email = $('#sign-in-email').val();
  let password = $('#sign-in-password').val();
  $('#sign-in-modal').modal('hide');
};

const onChangePassword = function(e){
  e.preventDefault();
  let oldPassword = $('#old-password').val();
  let newPassword = $('#new-password').val();
  $('#change-password-modal').modal('hide');
};

const onSignOut = function(e){
  alert('you have signed out!');
};

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
};
