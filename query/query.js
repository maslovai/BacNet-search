'use strict';

// (function(module){
  const query = {};
  $('#submit').on('click', function(){
    console.log(' in function')
     $('#result-ul').append('<li>Look what we have got for you!</li>');
   });
   $('#reset').on('click', function(){
      $('#sequence').empty().attr("placeholder","sequence");
    });
//   module.query = query;
// });
