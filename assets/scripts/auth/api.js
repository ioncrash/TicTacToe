'use strict';

const app = require('../app.js');
const store = require('../store.js');

const signUp = function(data) {
    return $.ajax({
      url: app.host + 'sign-up',
      method: 'POST',
      data,

  });
};

  const signIn = function(data) {
      return $.ajax({
        url: app.host + 'sign-in',
        method: 'POST',
        data,
      });
    };

    const changeXPassword = function(data) {
        return $.ajax({
          url: app.host + 'change-password/' + store.player_x.user.id,
          method: 'PATCH',
          data,
          headers: {
            Authorization: 'Token token=' + store.player_x.user.token,
          },
        });
      };

      const changeOPassword = function(data) {
          return $.ajax({
            url: app.host + 'change-password/' + store.player_o.user.id,
            method: 'PATCH',
            data,
            headers: {
              Authorization: 'Token token=' + store.player_o.user.token,
            },
          });
        };

    const signOutX = function() {
      return $.ajax({
      url: app.host + 'sign-out/' + store.player_x.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.player_x.user.token,
      },
    });
  };

  const signOutO = function() {
    return $.ajax({
    url: app.host + 'sign-out/' + store.player_o.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.player_o.user.token,
    },
  });
};

module.exports = {
  signUp,
  signIn,
  changeXPassword,
  changeOPassword,
  signOutX,
  signOutO
};
