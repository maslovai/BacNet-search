'use strict';

(function(module){
  const query = {};
  
  query.showRequestPage = function(){
    $('#request-container').show().siblings().hide();
  }

  $('#submit').on('click', function(){
    console.log(' in submit')
    $('#result-ul').empty().append('<li>Look what we have got for you!</li>');
  });


  $('#reset').on('click', function(){
    $('#sequence').val('').attr("placeholder","sequence");
  });

  module.query = query;
})(window);
