$(document).ready(function() {
    $('#menuBtn').click(function() {
      $('nav .navigation ul').addClass('active');
    });
  
    $('#closeBtn').click(function() {
      $('nav .navigation ul').removeClass('active');
    });
  });
  