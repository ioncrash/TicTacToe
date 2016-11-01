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
  } else if (!store.player_o) {
    store.player_o = {
      user: data.user
    };
  }
    debugger;
    success(data);
  };
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
