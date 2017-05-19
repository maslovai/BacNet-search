'use strict';

(function(module){
 const query = {};

  query.showRequestPage = function(){
    $('#request-container').show();
    $('#clonet-wrapper').hide();
    $('#header-container').show();
    $('#section-video-container').show();
    $('#barcode-container').hide();

    $('#aboutTable').hide(); //this hides our About Us table...

    $('#nav-links #query-request-tab').hide().siblings().show();

  }



  $('#submit').on('click', function(){
     $('#result-ul').append('<li>Look what we have for you!</li>');
   });


   $('#reset').on('click', function(){
      $('#hospital-filter').val("All").attr("selected","true");
      $('#sequence').val('').attr("placeholder","sequence");
    });


  module.query = query;
})(window);
