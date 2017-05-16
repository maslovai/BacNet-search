'use strict';

(function(module){
 const query = {};

  query.showRequestPage = function(){
    $('#request-container').show();
    $('#clonet-principle').hide();
    $('#header-container').show();
    $('#section-video-container').show();
    $('#barcode-container').hide();
    $('#nav-links #query-request-tab').hide().siblings().show();
  }

  // query.handleFilter = function(){
  //    $('#author-filter').on('change', function() {
  //    if ($(this).val())
  //    }
  // }


  $('#submit').on('click', function(){
    console.log(' in submit')
     $('#result-ul').empty().append('<li>Look what we have for you!</li>');
   });


   $('#reset').on('click', function(){
      $('#sequence').val('').attr("placeholder","sequence");
    });


  module.query = query;
})(window);
