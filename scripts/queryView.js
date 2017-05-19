'use strict';

(function(module){
 const query = {};

  query.showRequestPage = function(){
    $('#request-container').show();
    $('#clonet-principle').hide();
    $('#header-container').show();
    $('#section-video-container').show();
    $('#barcode-container').hide();

    $('#aboutTable').hide(); //this hides our About Us table...

    $('#nav-links #query-request-tab').hide().siblings().show();

  }

  //  getAntibioticData = function(bacteria, hospital){
  //
  //  }
  //
  //
  // query.handleFilter = function(){
  //    $('#hospital-filter').on('change', function({
  //    $bacCode = $("#bacCode").val();
  //    $hospital = $this.val();
  //      getAntibioticData($bacCode, $hospital);
  //    }
  // }


  $('#submit').on('click', function(){
     $('#result-ul').append('<li>Look what we have for you!</li>');
   });


   $('#reset').on('click', function(){
      $('#hospital-filter').val("All").attr("selected","true");
      $('#sequence').val('').attr("placeholder","sequence");
    });


  module.query = query;
})(window);
