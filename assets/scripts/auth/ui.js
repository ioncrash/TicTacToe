'use strict';

const store = require('../store.js');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

const signInSuccess = (data) => {
  store.user = data;
  success(data);
  console.log(data);
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
