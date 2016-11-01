'use strict';

let app = require('../app.js');

const signUp = function(email, password, confirmPassword) {
    return $.ajax({
      url: app.host + '/sign-up',
      method: 'POST',
      data: {
        "credentials": {
          "email": "an@example.email",
          "password": "an example password",
          "password_confirmation": "an example password"
        }
      }
    });
  };

module.exports = {
  signUp,
};
