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
     console.log(hospital, barcode);
    $.get('/entries/'+hospital+'/'+barcode)
    // + '&barcode='+barcode)
    .then(callback);
    });
  }
  // handling submit:
  var outputList = [];
  let $hospital;
  let $barcode;
   query.submitRequest = function() {
    $('#bac-form').on('click', '#submit', function(e) {
    e.preventDefault();
    $('#result-ul').empty();
    $hospital = $("#hospital-filter").val();
    $barcode = $("#bacCode").val();
    //console.log($hospital, $barcode);
    //creating an array of list items after returnig a string form the DB
    //don't know how to pass hospital and barcode into the get request
    outpuList = query.getString($hospital, $barcode, callback);
    outputList.split('\n');
    outputList.map(ele =>
    $('#result-ul').append(`<li>`+ ele + `</li>`));
})
}

 $('#reset').on('click', function(){
  $('#hospital-filter').val("All").attr("selected","true");
  $('#sequence').val('').attr("placeholder","barcode");
 });
query.submitRequest();
module.query = query;
})(window);
