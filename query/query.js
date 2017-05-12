'use strict';

(function(module){
  const query = {};

  $('#submit').on('click', function(){
    console.log(' in function')
     $('#result-ul').empty().append('<li>Look what we have got for you!</li>');
   });


   $('#reset').on('click', function(){
      $('#sequence').val('').attr("placeholder","sequence");
    });
  module.query = query;
});
