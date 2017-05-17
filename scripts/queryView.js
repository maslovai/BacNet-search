'use strict';

(function(module){
  const query = {};
  query.showRequestPage = function(){
    $('#request-container').show();
    $('#clonet-principle-container').hide();
    $('#header-container').show();
    $('#section-video-container').show();
    $('#barcode-container').hide();
    $('#aboutTable').hide(); //this hides our About Us table...
    $('#nav-links #query-request-tab').hide().siblings().show();
  }
  query.getString = function(hospital, barcode, callback){
    $.ajax({
      url: `/entries`,
      method: 'GET',
      data: {
        site:hospital,
        barcode:barcode
      }
    }).then(callback)
  }
  let outputList = [];
  $('#submit').on('click', function(){
    $('#result-ul').empty();
    let $hospital = $("#hospital-filter").val();
    let $barcode = $("#bacCode").val();
    //creating an array of list items after returnig a string form the DB
    let outputList = getString($hospital, $barcode, callback).split('\n');
    outputList.map(ele =>
    $('#result-ul').append(`<li>`+ ele + `</li>`));
});

 $('#reset').on('click', function(){
  $('#hospital-filter').val("All").attr("selected","true");
  $('#sequence').val('').attr("placeholder","barcode");
 });

module.query = query;
})(window);
