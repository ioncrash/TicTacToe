'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(()=>{
  $('.sign-up-form').on('submit', function(e){
    e.preventDefault();
    let email = $('#sign-up-email').val();
    let password = $('#sign-up-password').val();
    let confirmPassword = $('#confirm-password').val();
    debugger;
    $('#sign-up-modal').modal('hide');
  });


  $('.sign-in-form').on('submit', function(e){
    e.preventDefault();
    let email = $('#sign-in-email').val();
    let password = $('#sign-in-password').val();
    debugger;

    $('#sign-in-modal').modal('hide');
  });

  $('.change-password-form').on('submit', function(e){
    e.preventDefault();
    let oldPassword = $('#old-password').val();
    let newPassword = $('#new-password').val();
    debugger;

    $('#change-password-modal').modal('hide');
  });

  $('#sign-out-button').on('click', function(e){
    alert('you have signed out!');
  });
});
