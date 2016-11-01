'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function(e){
  e.preventDefault();
  let email = $('#sign-up-email').val();
  let password = $('#sign-up-password').val();
  let confirmPassword = $('#confirm-password').val();
  debugger;
  $('#sign-up-modal').modal('hide');
};

module.exports = {
  onSignUp,
};
