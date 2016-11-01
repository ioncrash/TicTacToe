'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
let auth = require('./auth/events.js')

$(()=>{
  $('.sign-up-form').on('submit', auth.onSignUp);



  $('.sign-in-form').on('submit', auth.onSignIn);

  $('.change-password-form').on('submit', function(e){
    e.preventDefault();
    let oldPassword = $('#old-password').val();
    let newPassword = $('#new-password').val();

    $('#change-password-modal').modal('hide');
  });

  $('#sign-out-button').on('click', function(e){
    alert('you have signed out!');
  });
});
